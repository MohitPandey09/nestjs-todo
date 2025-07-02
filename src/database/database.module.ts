import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      database: 'todo',
      username: 'root',
      password: 'password',
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      autoLoadModels: true,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
