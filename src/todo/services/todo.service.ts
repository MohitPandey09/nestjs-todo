import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TodoModel } from '../../database/models/todo.model';

@Injectable()
export class TodoService {
  constructor(@InjectModel(TodoModel) private todoModel: typeof TodoModel) {
  }

  public createTodo(data: Pick<TodoModel, 'title' | 'description'>): Promise<TodoModel> {
    return this.todoModel.build().set(data).save();
  }

  public updateTodo(todo: TodoModel, data: Partial<TodoModel>): Promise<TodoModel> {
    return todo.set(data).save();
  }

  public deleteTodo(todo: TodoModel): Promise<number> {
    return todo.destroy();
  }

  public findById(id: number): Promise<TodoModel> {
    return this.todoModel.findByPk(id);
  }
}
