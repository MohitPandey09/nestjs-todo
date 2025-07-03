import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'todo', createdAt: false, updatedAt: false })
export class TodoModel extends Model<TodoModel> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @ApiProperty()
  declare id: number;

  @Column
  @ApiProperty()
  declare title: string;

  @Column
  @ApiProperty()
  declare description: string;
}
