import { Injectable, NotFoundException, PipeTransform, Type } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { TodoModel } from '../../database/models/todo.model';

@Injectable()
export class MapTodoPipe implements PipeTransform {
  constructor(private todoService: TodoService) {
  }

  async transform(value: number): Promise<TodoModel> {
    const todo = await this.todoService.findById(value);

    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }
}
