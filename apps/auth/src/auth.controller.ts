import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
  @MessagePattern({ cmd: 'GET_USER' })
  async getUser(@Ctx() context: RmqContext): Promise<any> {
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);
    return { name: 'chinedu', age: 10 };
  }
}
