import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoModel } from '../../database/models/todo.model';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoModel) private todoModel: typeof TodoModel
  ) {}

  public createTodo(data: Pick<TodoModel, 'title' | 'description'>) {
    return this.todoModel.build().set(data).save();
  }
}
