/**
 * 한국국제협력단_글로벌연수사업 목록
 */
import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const globalTraining = pgTable('global_training', {
  global_training_id: bigint({ mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  country_name: text().notNull().default(''),
  id: bigint({ mode: 'number' }),
  note: text().notNull().default(''),
  project_name_ko: text().notNull().default(''),
  project_name_en: text().notNull().default(''),
  start_year: bigint({ mode: 'number' }),
  end_year: bigint({ mode: 'number' }),
  project_type: text().notNull().default(''),
  region: text().notNull().default(''),
  training_type: text().notNull().default('')
});
