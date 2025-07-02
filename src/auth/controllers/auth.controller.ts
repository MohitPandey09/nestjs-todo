import {
  Body,
  Controller,
  Inject,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AuthService) private userService: AuthService) {}

  @Post()
  public login(@Body() data: any) {
    return this.userService.login();
  }
}
