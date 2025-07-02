import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: "todo", createdAt: false, updatedAt: false})
export class TodoModel extends Model<TodoModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  title: string;

  @Column
  description: string;
}