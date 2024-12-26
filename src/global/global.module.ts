import { Global, Module } from '@nestjs/common';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Global()
@Module({
  imports: [DrizzleModule],
  providers: [],
  exports: [],
})
export class GlobalModule {}
