import type { DevcoopVideosDB } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';

import { delay, fetchWithPagination, translateKeys } from '../common';
import type { DevcoopVideos } from './types';
import type { KeyMapping, RequestOpenApi, ResponseOpenApi } from '../common/types';
const keyMapping: KeyMapping<keyof DevcoopVideos, keyof Omit<DevcoopVideosDB, 'devcoop_video_id'>> =
  {
    교육콘텐츠여부: 'is_educational_content',
    날짜: 'date',
    링크: 'link',
    설명: 'description',
    연번: 'id',
    번호: 'id',
    제목: 'title',
    채널명: 'channel_name',
    코로나19관련: 'related_to_covid19',
    코로나19영상FAQ: 'covid19_video_faq'
  } as const;

export const getDevcoopVideos = async (request: RequestOpenApi): Promise<DevcoopVideosDB[]> => {
  const { returnType = 'JSON' } = request;
  const queryParams = `returnType=${returnType}&serviceKey=${ENV.api.key}`;
  let allData: ResponseOpenApi<DevcoopVideosDB>[] = [];

  for (const path of DEVCOOP_VIDEOS_PATH_ARRAY) {
    try {
      const pathResults = await fetchWithPagination<DevcoopVideosDB>(path, queryParams);
      allData = [...allData, ...pathResults];

      if (path !== DEVCOOP_VIDEOS_PATH_ARRAY[DEVCOOP_VIDEOS_PATH_ARRAY.length - 1]) {
        await delay(1000);
      }
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      continue;
    }
  }

  const flatData = allData.flatMap((item) => item.data);
  return translateKeys(flatData, keyMapping) as DevcoopVideosDB[];
};

const DEVCOOP_VIDEOS_PATH_ARRAY = [
  '/15074674/v1/uddi:32550ded-e3d6-41a6-9548-dc9609b3aa9f',
  '/15074674/v1/uddi:b1ab3b9f-c582-4c1a-8168-b5b49a3f364e',
  '/15074674/v1/uddi:11ab1acd-c112-430c-8e59-e15652b66a86',
  '/15074674/v1/uddi:77be310e-32df-48df-b7e5-aed95eaefe49',
  '/15074674/v1/uddi:a4657286-692c-42c6-8b9f-eb161add91d3',
  '/15074674/v1/uddi:522c52b1-230c-4bfb-80e3-8ba822de1917',
  '/15074674/v1/uddi:7e50a9d2-66e3-40a2-bddd-880017ad8ae4',
  '/15074674/v1/uddi:b1af4233-4164-4bbe-a1b0-e38582f47a71',
  '/15074674/v1/uddi:7310d6d0-0875-4713-96f4-987c44fd8c64',
  '/15074674/v1/uddi:6a1cf496-b5f3-4df5-bb66-b56d3c17791f',
  '/15074674/v1/uddi:b640f155-3fd6-45cb-8642-f7a573257d0c'
];
