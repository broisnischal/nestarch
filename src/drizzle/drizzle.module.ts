import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

import * as schema from './schema/schema';

export const DRIZZLE = Symbol('drizzle-connection');

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const databaseURL = configService.get<string>('DATABASE_URL');
        // if (!databaseURL) {
        //   throw new Error('No DATABASE_URL provided');
        // }
        const pool = new Pool({
          connectionString: databaseURL,
          ssl: true,
        });
        drizzle(pool, {
          schema: schema,
        }) as NodePgDatabase<typeof schema>;
      },
      //   useFactory: () => require('drizzle-orm/postgres-js').default,
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
