/**
 * 한국국제협력단_해외사무소 주소목록
 */
import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const overseasOffices = pgTable('overseas_offices', {
  overseas_office_id: bigint({ mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  type: text().notNull().default(''),
  id: bigint({ mode: 'number' }),
  address: text().notNull().default(''),
  region: text().notNull().default(''),
  overseas_office_name: text().notNull().default('')
});
