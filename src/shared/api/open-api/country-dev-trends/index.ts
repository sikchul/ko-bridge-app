import type { CountryDevTrendDB } from '@shared/api/supabase';
import { ENV } from '@shared/constants/config';

type CountryDevTrends = {
  국가?: string;
  국가명?: string;
  지역?: string;
  사무소?: string;
  구분: string;
  분야: string;
  제목: string;
  본문1: string;
  본문2: string;
  본문3: string;
  본문4?: string;
  본문5?: string;
  코로나19관련?: string;
  출처: string;
  링크: string;
  날짜: string;
};

interface ResponseCountryDevTrends {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: CountryDevTrends[];
}

interface RequestCountryDevTrends {
  page?: string;
  perPage?: string;
  returnType?: string;
}

type KeyMapping<T extends string, U extends string> = {
  [K in T]: U;
};

const translateKeys = (
  data: Record<string, unknown>[],
  keyMapping: Record<string, string>
): Record<string, unknown>[] => {
  return data.map((item) => {
    const translatedItem: Record<string, unknown> = {};
    Object.keys(item).forEach((key) => {
      const englishKey = keyMapping[key];
      if (englishKey) {
        translatedItem[englishKey] = item[key];
      }
    });
    return translatedItem;
  });
};

const keyMapping: KeyMapping<
  keyof CountryDevTrends,
  keyof Omit<CountryDevTrendDB, 'country_dev_trend_id'>
> = {
  국가: 'country',
  국가명: 'country_name',
  지역: 'region',
  사무소: 'office',
  구분: 'category',
  분야: 'sector',
  제목: 'title',
  본문1: 'content_1',
  본문2: 'content_2',
  본문3: 'content_3',
  본문4: 'content_4',
  본문5: 'content_5',
  코로나19관련: 'covid19_related',
  출처: 'source',
  링크: 'link',
  날짜: 'published_date'
} as const;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithPagination = async (
  path: string,
  queryParams: string,
  pageSize: number = 900
): Promise<ResponseCountryDevTrends[]> => {
  const firstResponse = await fetch(
    `${ENV.api.url}${path}?${queryParams}&page=1&perPage=${pageSize}`
  );
  const firstData = (await firstResponse.json()) as ResponseCountryDevTrends;
  const totalCount = firstData.totalCount;

  const totalPages = Math.ceil(totalCount / pageSize);
  const results: ResponseCountryDevTrends[] = [firstData];

  for (let page = 2; page <= totalPages; page++) {
    const response = await fetch(
      `${ENV.api.url}${path}?${queryParams}&page=${page}&perPage=${pageSize}`
    );
    const data = (await response.json()) as ResponseCountryDevTrends;
    results.push(data);

    if (page < totalPages) {
      await delay(1000);
    }
  }

  return results;
};

export const getCountryDevTrends = async (
  request: RequestCountryDevTrends
): Promise<CountryDevTrendDB[]> => {
  const { returnType = 'JSON' } = request;
  const queryParams = `returnType=${returnType}&serviceKey=${ENV.api.key}`;
  let allData: ResponseCountryDevTrends[] = [];

  for (const path of COUNTRY_DEV_TRENDS_PATH_ARRAY) {
    try {
      const pathResults = await fetchWithPagination(path, queryParams);
      allData = [...allData, ...pathResults];

      if (path !== COUNTRY_DEV_TRENDS_PATH_ARRAY[COUNTRY_DEV_TRENDS_PATH_ARRAY.length - 1]) {
        await delay(1000);
      }
    } catch (error) {
      console.error(`Error fetching data from ${path}:`, error);
      continue;
    }
  }

  const flatData = allData.flatMap((item) => item.data);
  return translateKeys(flatData, keyMapping) as CountryDevTrendDB[];
};

const COUNTRY_DEV_TRENDS_PATH_ARRAY = [
  '/15052910/v1/uddi:3c70b3df-0729-447e-8373-fb5b161a3565_202004171551',
  '/15052910/v1/uddi:edb0eae9-b88f-41e2-b86f-ce76377a404a',
  '/15052910/v1/uddi:3775853b-2279-4ddd-982f-e224f2ea4796',
  '/15052910/v1/uddi:372bebb0-0672-41c3-95dd-a48058fe28c1',
  '/15052910/v1/uddi:c48345b3-9368-42a4-8c59-ff9f0d8bc0ab',
  '/15052910/v1/uddi:a77218eb-01a9-4d84-8505-80c5ab87bc20',
  '/15052910/v1/uddi:c4d6575d-8c0a-443c-977f-b45f0cfa98eb',
  '/15052910/v1/uddi:3ca52d9d-ffa8-4bbc-a77c-cfd9b42dbcf4',
  '/15052910/v1/uddi:6538b438-7343-46c4-93d9-c13287208b1f',
  '/15052910/v1/uddi:120094ff-86b3-4bc6-ae0e-a9cceb34716f',
  '/15052910/v1/uddi:69ea1707-6d56-4d3b-88fd-a8b52aefcb75',
  '/15052910/v1/uddi:a7cf85a0-9c47-4a6f-9c22-9fd20d8e6371',
  '/15052910/v1/uddi:26560bc8-9ae7-4b26-ae68-954d2c786c89',
  '/15052910/v1/uddi:9b61ed70-d55f-4b02-8af3-eefa63e8f0b0',
  '/15052910/v1/uddi:228e1a48-f9f7-4ee3-bb37-f03d38262cd9',
  '/15052910/v1/uddi:55c3eba4-3f6d-4621-9a12-fca370103adc',
  '/15052910/v1/uddi:eee52c10-dbc2-405c-88b2-aef8eec9cc26',
  '/15052910/v1/uddi:3cd8d4ec-dc01-4af6-8b26-d66920f6abe1',
  '/15052910/v1/uddi:faf6e7e5-49de-4687-9ed2-ec4dfec5f94b',
  '/15052910/v1/uddi:6fac7a01-2324-49a9-b6e7-82b1443decda',
  '/15052910/v1/uddi:9b28bd0a-a0df-4c73-917a-92c0cc518504',
  '/15052910/v1/uddi:a1dd9b9a-48af-4f5f-a821-e4d59e12033f',
  '/15052910/v1/uddi:792a64d9-3e98-4e87-b8aa-cf3984dd2549',
  '/15052910/v1/uddi:44c8f5cc-2188-44b6-9b69-c26d4a8d20cc',
  '/15052910/v1/uddi:f1655578-28ef-4109-a8d0-f4ebeb711b51',
  '/15052910/v1/uddi:2fe7831f-c478-4326-9ef6-fe7ae96b0686',
  '/15052910/v1/uddi:967aa882-6ce6-49b1-b950-d94876c11c80',
  '/15052910/v1/uddi:ee4e3d3f-a86f-4a6d-a13e-b535e3794b84',
  '/15052910/v1/uddi:939c5ca1-f1f4-411f-b6e7-d76043933615',
  '/15052910/v1/uddi:c3d847c2-7c66-4507-ad96-f8e3d51ff9ad',
  '/15052910/v1/uddi:801f1b3b-794b-46a1-ba31-bca714c67b53',
  '/15052910/v1/uddi:c4d1dfa6-e930-4749-97ec-eb18912f8423',
  '/15052910/v1/uddi:e43273cf-a573-4542-871e-fba567347db9',
  '/15052910/v1/uddi:4aba0e0e-c850-4f88-a014-e1aa1f3e9480',
  '/15052910/v1/uddi:27468ccd-d38e-4898-a45e-f9b397337dd0',
  '/15052910/v1/uddi:26ec9120-fb8c-45a9-9e92-a8d7dc82bdfb',
  '/15052910/v1/uddi:daea05bd-c847-4c82-8191-fd7f0595964b',
  '/15052910/v1/uddi:83e5c97d-5c77-4f9b-bd37-a603b3dfe482',
  '/15052910/v1/uddi:77cb9100-b33e-49cd-89f2-e5b9bd72eed4',
  '/15052910/v1/uddi:20a6314b-6afb-4898-8ed1-f4bd1b2adbae',
  '/15052910/v1/uddi:a03a071c-b8f7-4a1f-886d-fe24e68dd582',
  '/15052910/v1/uddi:2aeef0a4-3b77-41f0-a666-b9ba186e4b8f',
  '/15052910/v1/uddi:843b9e85-8535-41db-a2d1-edd6d6e70f77',
  '/15052910/v1/uddi:699b3590-160f-4b84-be2f-f4bb38fb675b',
  '/15052910/v1/uddi:10ff0fb5-e1c6-4bc9-a90f-9adec2f7980f',
  '/15052910/v1/uddi:8034dfe2-86b4-4eef-86fa-b7a689206918',
  '/15052910/v1/uddi:1b70bbdd-084d-4b11-886d-f5b5f2a38c9e',
  '/15052910/v1/uddi:f0f80470-da29-4c15-81d9-f9e2912bec5a',
  '/15052910/v1/uddi:b11acb27-82f6-4b05-9dd3-9f5ea92bcbbf',
  '/15052910/v1/uddi:eff7fd98-dc31-4cbe-af6a-b108110a4067',
  '/15052910/v1/uddi:17ee3405-4807-4aa7-b233-ddc3c55f6c66',
  '/15052910/v1/uddi:c2981b2b-0e69-4319-a111-f8ed7a0c7fb7',
  '/15052910/v1/uddi:c490f93a-5af7-4bff-af34-c3be2b859326',
  '/15052910/v1/uddi:92c50f94-ad82-4b4a-b129-c8480669eab4',
  '/15052910/v1/uddi:a0c00070-5fb8-4cfe-b91d-e083b6d81588',
  '/15052910/v1/uddi:d5582a6a-031d-468c-9ee7-c5554c3ce938',
  '/15052910/v1/uddi:59c6389c-8119-477d-a053-ae02fba32d9a',
  '/15052910/v1/uddi:3aa9def5-6553-477b-8dee-af0a1b93b878',
  '/15052910/v1/uddi:09e546c2-6211-40fc-a020-cff839985968',
  '/15052910/v1/uddi:6b12b861-8acc-48cf-8fbd-8cc37d2f33e1'
];
