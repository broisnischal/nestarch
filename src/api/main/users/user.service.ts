import { Inject, Injectable } from '@nestjs/common';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import { users } from '@/drizzle';
import { DrizzleDB } from '@/drizzle/types/drizzle';

@Injectable()
export class UserService {
  // constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}
  // async findUser() {
  //   return await this.db.select().from(users);
  // }
}
