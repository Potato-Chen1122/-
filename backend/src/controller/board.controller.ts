import { Inject, Controller, Get, Query, Param, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/:uid/get_user')
  async getUser(@Param('uid') uid: number, @Query('phone') phone: number, @Body() args: { mail: string }) {
    let email = args.mail
    const user = await this.userService.getUser({ uid, phone, email });
    return { success: true, message: 'OK', data: user };
  }
}