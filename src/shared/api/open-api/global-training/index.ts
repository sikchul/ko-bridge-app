import type { GlobalTrainingDB } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';

import { delay, fetchWithPagination, translateKeys } from '../common';
import type { GlobalTraining } from './types';
import type { KeyMapping, RequestOpenApi, ResponseOpenApi } from '../common/types';
const keyMapping: KeyMapping<
  keyof GlobalTraining,
  keyof Omit<GlobalTrainingDB, 'global_training_id'>
> = {
  국가: 'country_name',
  국가명: 'country_name',
  연번: 'id',
  번호: 'id',
  유형: 'project_type',
  지역: 'region',
  사업명_국문: 'project_name_ko',
  '사업명(국문)': 'project_name_ko',
  사업명_영문: 'project_name_en',
  '사업명(영문)': 'project_name_en',
  시작연도: 'start_year',
  종료연도: 'end_year',
  연수기관: 'training_type',
  비고: 'note'
} as const;

export const getGlobalTraining = async (request: RequestOpenApi): Promise<GlobalTrainingDB[]> => {
  const { returnType = 'JSON' } = request;
  const queryParams = `returnType=${returnType}&serviceKey=${ENV.api.key}`;
  let allData: ResponseOpenApi<GlobalTrainingDB>[] = [];

  for (const path of GLOBAL_TRAINING_PATH_ARRAY) {
    try {
      const pathResults = await fetchWithPagination<GlobalTrainingDB>(path, queryParams);
      allData = [...allData, ...pathResults];

      if (path !== GLOBAL_TRAINING_PATH_ARRAY[GLOBAL_TRAINING_PATH_ARRAY.length - 1]) {
        await delay(1000);
      }
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      continue;
    }
  }

  const flatData = allData.flatMap((item) => item.data);
  return translateKeys(flatData, keyMapping) as GlobalTrainingDB[];
};

const GLOBAL_TRAINING_PATH_ARRAY = [
  '/15102578/v1/uddi:441fd5dd-65e3-45c6-9080-a8b6c82dba27',
  '/15102578/v1/uddi:d147f1e0-8a1c-4687-aa7a-b7f417727327',
  '/15102578/v1/uddi:76c056f5-ae1b-41f5-81ce-a6d5de00f131',
  '/15102578/v1/uddi:6280c963-af39-4313-8f70-b2b8e0d95560',
  '/15102578/v1/uddi:6cfa22ef-6e79-474e-9324-90ed83b0907a',
  '/15102578/v1/uddi:af62548e-4a91-43e0-9230-f4010957d6f8',
  '/15102578/v1/uddi:26ab954d-6e4b-4383-9ddf-d23f9ceb405e',
  '/15102578/v1/uddi:ad6e2fe5-37bf-4ceb-8f1b-d76044032145',
  '/15102578/v1/uddi:9054626a-6340-4df9-bc2c-b3bfa2fd7e17',
  '/15102578/v1/uddi:e0378e93-44c8-4a09-b990-f3f28333d3c3'
];
