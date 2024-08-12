import { Inject, Controller, Body, Post } from '@midwayjs/core';
import { UserService } from '../service/user.service';

@Controller('/')
export class HomeController {
  @Inject()
  userService: UserService;
  @Post('/login')
  public async login(@Body() form: {
    user_name: string,
    user_pwd: string,
  }) {
    console.log(form.user_name)
    const user = await this.userService.login(form.user_name, form.user_pwd);
    return { success: true, message: '登录成功', data: user };
  }
}

