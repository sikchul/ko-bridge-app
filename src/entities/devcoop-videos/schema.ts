/**
 * 한국국제협력단_개발협력 영상정보
 */
import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const devcoopVideos = pgTable('devcoop_videos', {
  devcoop_video_id: bigint({ mode: 'number' }).primaryKey().generatedByDefaultAsIdentity(),
  is_educational_content: text().notNull().default(''),
  date: text().notNull().default(''),
  link: text().notNull().default(''),
  description: text().notNull().default(''),
  id: bigint({ mode: 'number' }),
  title: text().notNull().default(''),
  channel_name: text().notNull().default(''),
  related_to_covid19: text().notNull().default(''),
  covid19_video_faq: text().notNull().default('')
});
