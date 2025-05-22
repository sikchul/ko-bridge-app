/**
 * 한국국제협력단_국별 개발협력동향
 */

import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const countryDevTrends = pgTable('country_dev_trends', {
  country_dev_trend_id: bigint({ mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  country: text().notNull().default(''),
  country_name: text().notNull().default(''),
  region: text().notNull().default(''),
  office: text().notNull().default(''),
  category: text().notNull().default(''),
  sector: text().notNull().default(''),
  title: text().notNull().default(''),
  content_1: text().notNull().default(''),
  content_2: text().notNull().default(''),
  content_3: text().notNull().default(''),
  content_4: text().notNull().default(''),
  content_5: text().notNull().default(''),
  covid19_related: text().notNull().default(''),
  source: text().notNull().default(''),
  link: text().notNull().default(''),
  published_date: text().notNull().default('')
});
