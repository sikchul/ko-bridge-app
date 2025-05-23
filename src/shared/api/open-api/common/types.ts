export interface ResponseOpenApi<T> {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: T[];
}

export interface RequestOpenApi {
  page?: number;
  perPage?: number;
  returnType?: string;
}

export type KeyMapping<T extends string, U extends string> = {
  [K in T]: U;
};
