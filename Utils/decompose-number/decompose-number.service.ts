import { Injectable } from '@nestjs/common';

@Injectable()
export class DecomposeNumberService {
  public async fetch(username: string): Promise<User & { password: string }> {
    return Promise.resolve({
      id: 'test',
      password: 'crypto',
      name: username,
      email: `${username}@test.com`,
      roles: ['test'], // ['admin', 'etc', ...]
    });
  }
}