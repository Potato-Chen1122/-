import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: options.phone,
      email: options.email,
      options
    };
  }
  async print(sentence: string) {
    return sentence
  }
}
