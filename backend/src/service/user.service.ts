import { Provide } from '@midwayjs/core';
import { User } from '../interface';

@Provide()
export class UserService {
  async register(username: string, password: string) {
    const user = new User();
    user.username = username;
    user.password = password;
    return user;
  }

  async login(username: string, password: string) {
    const user = await User.findOne({ where: { username } });//似乎不能直接写name，需要把名称都改了
    if (!user){
      return this.register(username,password)
    }
    else if (password != user.password) {
      throw new Error('密码错误');
    }
    return user;
  }
}
