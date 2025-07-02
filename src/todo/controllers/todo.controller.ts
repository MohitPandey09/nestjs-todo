import { Body, Controller, Inject, Post } from '@nestjs/common';
import { TodoService } from '../services/todo.service';

@Controller('todo')
export class TodoController {
  constructor(
    @Inject(TodoService) private todoService: TodoService
  ) {}

  @Post()
  public create(@Body() data: any) {
    return this.todoService.createTodo(data);
  }
}
