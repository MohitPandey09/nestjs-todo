import { Body, Controller, HttpException, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(
    @Inject(TodoService) private todoService: TodoService
  ) {}

  @UsePipes(ValidationPipe)
  @Post()
  public create(@Body() data: CreateTodoDto) {
    return this.todoService.createTodo(data);
  }
}
