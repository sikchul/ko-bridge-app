import { supabase } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';
import type { Database } from '@shared/database/database.types';

import type { ResponseOpenApi } from './types';

type TableName =
  | 'country_dev_trends'
  | 'devcoop_videos'
  | 'dispatch_agencies'
  | 'global_training'
  | 'overseas_offices'
  | 'volunteer_guides';

type TablesInsert = Database['public']['Tables'][TableName]['Insert'];

export const translateKeys = (
  data: Record<string, unknown>[],
  keyMapping: Record<string, string>
): Record<string, unknown>[] => {
  return data.map((item) => {
    const translatedItem: Record<string, unknown> = {};
    Object.keys(item).forEach((key) => {
      const englishKey = keyMapping[key];
      if (englishKey) {
        if (englishKey === 'id') {
          translatedItem[englishKey] = item[key] === null ? 0 : Number(item[key]);
        } else {
          translatedItem[englishKey] = item[key] === null ? '' : item[key];
        }
      }
    });
    Object.values(keyMapping).forEach((englishKey) => {
      if (!(englishKey in translatedItem)) {
        translatedItem[englishKey] = englishKey === 'id' ? 0 : '';
      }
    });
    return translatedItem;
  });
};

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const chunkArray = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );
};

export const fetchWithPagination = async <T>(
  path: string,
  queryParams: string,
  pageSize: number = 500
): Promise<ResponseOpenApi<T>[]> => {
  const firstResponse = await fetch(
    `${ENV.api.url}${path}?${queryParams}&page=1&perPage=${pageSize}`
  );
  const firstData = (await firstResponse.json()) as ResponseOpenApi<T>;
  const totalCount = firstData.totalCount;

  const totalPages = Math.ceil(totalCount / pageSize);
  const results: ResponseOpenApi<T>[] = [firstData];

  for (let page = 2; page <= totalPages; page++) {
    const response = await fetch(
      `${ENV.api.url}${path}?${queryParams}&page=${page}&perPage=${pageSize}`
    );
    const data = (await response.json()) as ResponseOpenApi<T>;
    results.push(data);

    if (page < totalPages) {
      await delay(1000);
    }
  }

  return results;
};

export const upsertWithChunks = async <T extends TablesInsert>(
  tableName: TableName,
  data: T[],
  idField: string
) => {
  const sanitizedData = data.map((item) =>
    Object.fromEntries(
      Object.entries(item).map(([key, value]) => [key, value === null ? '' : value])
    )
  ) as T[];

  const chunks = chunkArray(sanitizedData, 100);

  for (const chunk of chunks) {
    try {
      const { error } = await supabase.from(tableName).upsert(chunk, {
        onConflict: idField
      });

      if (error) {
        console.error(`Supabase upsert error for ${tableName}:`, error);
        throw error;
      }

      await delay(1000);
    } catch (error) {
      console.error(`Failed to upsert chunk in ${tableName}:`, error);
      throw error;
    }
  }
};
