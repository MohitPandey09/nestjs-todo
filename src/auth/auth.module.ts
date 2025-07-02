import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../database/models/user.model';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    SequelizeModule.forFeature([
      UserModel
    ])
  ]
})
export class AuthModule {}
