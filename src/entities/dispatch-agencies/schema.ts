/**
 * 한국국제협력단_해외봉사단 파견기관정보
 */

import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const dispatchAgencies = pgTable('dispatch_agencies', {
  dispatch_agency_id: bigint({ mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  country: text().notNull().default(''),
  agency_name_ko: text().notNull().default(''),
  agency_name_en: text().notNull().default('')
});
