import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'todo', createdAt: false, updatedAt: false })
export class TodoModel extends Model<TodoModel> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column
  declare title: string;

  @Column
  declare description: string;
}
