import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'infrastructure/prisma/schema/schema.prisma',
  migrations: {
    path: 'infrastructure/prisma/migrations',
    seed: 'tsx ./infrastructure/prisma/seed.ts',
  },
  datasource: {
    url: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  },
});
