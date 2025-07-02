import {
  Body,
  Controller, HttpCode,
  HttpException, HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { MapTodoPipe } from '../pipes/map-todo.pipe';
import { TodoModel } from '../../database/models/todo.model';
import { ApiParam } from '@nestjs/swagger';

@Controller('todo')
export class TodoController {
  constructor(@Inject(TodoService) private todoService: TodoService) {}

  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  public create(@Body() data: CreateTodoDto) {
    return this.todoService.createTodo(data);
  }

  @ApiParam({ type: Number, name: 'todoId' })
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  @Put(':todoId')
  public update(
    @Body() data: UpdateTodoDto,
    @Param('todoId', ParseIntPipe, MapTodoPipe) todo: TodoModel,
  ) {
    return this.todoService.updateTodo(todo, data);
  }
}
