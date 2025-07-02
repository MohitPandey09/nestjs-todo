import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from '../../database/models/user.model';

@Injectable()
export class AuthService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) {}

  public login() {}

  public signup() {}
}
