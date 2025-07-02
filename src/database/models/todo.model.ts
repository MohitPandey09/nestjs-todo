import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: "todo", createdAt: false, updatedAt: false })
export class TodoModel extends Model<TodoModel> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Column
  description: string;
}