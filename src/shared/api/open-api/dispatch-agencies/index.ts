import type { DispatchAgenciesDB } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';

import { delay, fetchWithPagination, translateKeys } from '../common';
import type { DispatchAgencies } from './types';
import type { KeyMapping, RequestOpenApi, ResponseOpenApi } from '../common/types';
const keyMapping: KeyMapping<
  keyof DispatchAgencies,
  keyof Omit<DispatchAgenciesDB, 'dispatch_agency_id'>
> = {
  국가: 'country',
  국가명: 'country',
  파견기관명: 'agency_name_ko',
  파견기관영문명: 'agency_name_en',
  기관명_영문: 'agency_name_en',
  기관명_한글: 'agency_name_ko'
} as const;

export const getDispatchAgencies = async (
  request: RequestOpenApi
): Promise<DispatchAgenciesDB[]> => {
  const { returnType = 'JSON' } = request;
  const queryParams = `returnType=${returnType}&serviceKey=${ENV.api.key}`;
  let allData: ResponseOpenApi<DispatchAgenciesDB>[] = [];

  for (const path of DISPATCH_AGENCIES_PATH_ARRAY) {
    try {
      const pathResults = await fetchWithPagination<DispatchAgenciesDB>(path, queryParams);
      allData = [...allData, ...pathResults];

      if (path !== DISPATCH_AGENCIES_PATH_ARRAY[DISPATCH_AGENCIES_PATH_ARRAY.length - 1]) {
        await delay(1000);
      }
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      continue;
    }
  }

  const flatData = allData.flatMap((item) => item.data);
  return translateKeys(flatData, keyMapping) as DispatchAgenciesDB[];
};

const DISPATCH_AGENCIES_PATH_ARRAY = [
  '/15076582/v1/uddi:aaadf458-c450-410e-b292-ea9d64997fd9',
  '/15076582/v1/uddi:2445a483-3782-4cb1-aed8-8c1d87994e90',
  '/15076582/v1/uddi:ac9a8884-fc8e-4667-a5c8-a5fbcce54ba5',
  '/15076582/v1/uddi:d7b754d9-f485-489e-96b7-db756f78cc6a',
  '/15076582/v1/uddi:4efc40f5-b368-4e9c-b21f-e2948d630969',
  '/15076582/v1/uddi:f9b6ad0d-bd7c-4c30-bac3-f2efd91dbe24',
  '/15076582/v1/uddi:0a609a04-10da-4f34-8005-cf7913cff8a8',
  '/15076582/v1/uddi:7d911fd4-2bb4-4e6d-a997-e771377439f1',
  '/15076582/v1/uddi:2d3114ad-5e2f-4f93-a45b-b182f8bebcc7',
  '/15076582/v1/uddi:9997bf77-76c1-4471-86e2-a3073683dd95',
  '/15076582/v1/uddi:eff7f6f7-a3b0-4be2-aa9f-c8ba3ee19ba6'
];
