import { ENV } from '@shared/constants/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: [
    './src/entities/country-dev-trends/schema.ts',
    './src/entities/dispatch-agencies/schema.ts',
    './src/entities/global-training/schema.ts',
    './src/entities/overseas-offices/schema.ts',
    './src/entities/volunteer-guides/schema.ts',
    './src/entities/devcoop-videos/schema.ts'
  ],
  out: './src/shared/database/migrations',
  dbCredentials: {
    url: ENV.database.url
  }
});
