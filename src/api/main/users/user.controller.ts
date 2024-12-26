import { Body, Controller, Post } from '@nestjs/common';
import { ICredentialsDto, IUserDto } from './dto/user.dto';

@Controller('')
export class UserController {
  @Post('test')
  async testValidationIntl(@Body() body: IUserDto) {
    return body;
  }
}
