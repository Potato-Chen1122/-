import { Controller, Body, Post } from '@midwayjs/core';

@Controller('/')
export class HomeController {

  @Post('/login')
  public async login(@Body() form: {
    user_name: string,
    user_pwd: string,
  }) {
    if (password(form.user_name, form.user_pwd))
      console.log(form.user_name)
  }
}
function password(name: string, pwd: string): boolean {
  return true;
}