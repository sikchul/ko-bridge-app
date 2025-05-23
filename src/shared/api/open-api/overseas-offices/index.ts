import type { OverseasOfficesDB } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';

import { delay, fetchWithPagination, translateKeys } from '../common';
import type { OverseasOffices } from './types';
import type { KeyMapping, RequestOpenApi, ResponseOpenApi } from '../common/types';
const keyMapping: KeyMapping<
  keyof OverseasOffices,
  keyof Omit<OverseasOfficesDB, 'global_training_id'>
> = {
  국가코드KOICA: 'code',
  구분: 'type',
  비고: 'note',
  번호: 'id',
  해외사무소: 'overseas_office_name',
  해외사무소명: 'overseas_office_name',
  지역: 'region',
  주소: 'address',
  홈페이지: 'homepage'
} as const;

export const getOverseasOffices = async (request: RequestOpenApi): Promise<OverseasOfficesDB[]> => {
  const { returnType = 'JSON' } = request;
  const queryParams = `returnType=${returnType}&serviceKey=${ENV.api.key}`;
  let allData: ResponseOpenApi<OverseasOfficesDB>[] = [];

  for (const path of OVERSEAS_OFFICES_PATH_ARRAY) {
    try {
      const pathResults = await fetchWithPagination<OverseasOfficesDB>(path, queryParams);
      allData = [...allData, ...pathResults];

      if (path !== OVERSEAS_OFFICES_PATH_ARRAY[OVERSEAS_OFFICES_PATH_ARRAY.length - 1]) {
        await delay(1000);
      }
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      continue;
    }
  }

  const flatData = allData.flatMap((item) => item.data);
  return translateKeys(flatData, keyMapping) as OverseasOfficesDB[];
};

const OVERSEAS_OFFICES_PATH_ARRAY = [
  '/15050006/v1/uddi:1f41a4a9-6c1a-4309-a6b7-87ff7179df8d',
  '/15050006/v1/uddi:a88c6b1f-bcf0-40bf-8a8a-c30198543ed1',
  '/15050006/v1/uddi:9669fb70-8e1a-4c8b-8970-b1144d9b9eaf',
  '/15050006/v1/uddi:4b1abbe5-8fc8-4c7d-b825-bd4c275c044c',
  '/15050006/v1/uddi:298e9dd8-ac6c-4b42-b2aa-a1abc7914980',
  '/15050006/v1/uddi:0fc6c526-4c2a-4836-aa45-f9ff65ffed1d',
  '/15050006/v1/uddi:5593e73b-e0f5-4fe9-9505-f765a16f971e',
  '/15050006/v1/uddi:6d987d5e-8ec1-4191-9278-9746135b9c0f',
  '/15050006/v1/uddi:068182d7-6921-4c6d-b710-e90e252012e3',
  '/15050006/v1/uddi:3f4e06f0-a491-4564-bc56-efe74b22ec24',
  '/15050006/v1/uddi:49b30597-b616-426d-ae5e-a98aa5a7f6fd',
  '/15050006/v1/uddi:f1ee34f9-1d11-4168-94bd-bcbcfbb385dd'
];
