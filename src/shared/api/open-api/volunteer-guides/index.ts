import type { VolunteerGuidesDB } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';

import { delay, fetchWithPagination, translateKeys } from '../common';
import type { VolunteerGuides } from './types';
import type { KeyMapping, RequestOpenApi, ResponseOpenApi } from '../common/types';
const keyMapping: KeyMapping<
  keyof VolunteerGuides,
  keyof Omit<VolunteerGuidesDB, 'volunteer_guide_id'>
> = {
  내용: 'notice',
  안내사항: 'notice',
  다운로드URL: 'download_url',
  '다운로드링크(URL)': 'download_url',
  작성일: 'created_date',
  제목: 'title',
  확장자명: 'file_extension'
} as const;

export const getVolunteerGuides = async (request: RequestOpenApi): Promise<VolunteerGuidesDB[]> => {
  const { returnType = 'JSON' } = request;
  const queryParams = `returnType=${returnType}&serviceKey=${ENV.api.key}`;
  let allData: ResponseOpenApi<VolunteerGuidesDB>[] = [];

  for (const path of VOLUNTEER_GUIDES_PATH_ARRAY) {
    try {
      const pathResults = await fetchWithPagination<VolunteerGuidesDB>(path, queryParams);
      allData = [...allData, ...pathResults];

      if (path !== VOLUNTEER_GUIDES_PATH_ARRAY[VOLUNTEER_GUIDES_PATH_ARRAY.length - 1]) {
        await delay(1000);
      }
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      continue;
    }
  }

  const flatData = allData.flatMap((item) => item.data);
  return translateKeys(flatData, keyMapping) as VolunteerGuidesDB[];
};

const VOLUNTEER_GUIDES_PATH_ARRAY = [
  '/15099256/v1/uddi:9c8a2241-5c70-4b53-8b35-a3869fc69aeb',
  '/15099256/v1/uddi:3a1b52ec-d504-4148-935f-f3baa09fd98f',
  '/15099256/v1/uddi:b3e483c9-dc78-4dd7-9a48-fb7932716cd3',
  '/15099256/v1/uddi:12c3e52e-264e-4697-95e9-fd6fdc2991bc',
  '/15099256/v1/uddi:5d805084-d037-4768-a1a2-f45f606f6b46',
  '/15099256/v1/uddi:ee0f14f1-52ea-4940-990e-fe0be9dd58cd'
];
