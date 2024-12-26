import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    RouterModule.register([{ path: 'users', module: UserModule }]),
  ],
  exports: [],
  controllers: [],
  providers: [],
})
export class MainModule {}
