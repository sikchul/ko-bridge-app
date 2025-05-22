/**
 * 한국국제협력단_봉사활동 안내서
 */
import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const volunteerGuides = pgTable('volunteer_guides', {
  volunteer_guide_id: bigint({ mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  country: text().notNull().default(''),
  download_url: text().notNull().default(''),
  notice: text().notNull().default(''),
  created_date: text().notNull().default(''),
  title: text().notNull().default(''),
  file_extension: text().notNull().default('')
});
