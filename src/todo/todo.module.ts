import { Module } from '@nestjs/common';
import { TodoController } from './controllers/todo.controller';
import { TodoService } from './services/todo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoModel } from '../database/models/todo.model';

@Module({
  controllers: [TodoController],
  imports: [SequelizeModule.forFeature([
    TodoModel
  ])],
  providers: [TodoService]
})
export class TodoModule {}
