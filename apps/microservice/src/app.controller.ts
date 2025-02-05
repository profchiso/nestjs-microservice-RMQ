import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientProxy) {}

  @Get('api/v1/auth')
  async getUser() {
    return this.authService.send({ cmd: 'GET_USER' }, {});
  }

  @Post('api/v1/auth')
  async createUser() {
    return this.authService.send({ cmd: 'CREATE_USER' }, {});
  }
}
