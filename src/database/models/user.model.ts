import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: "users", createdAt: false, updatedAt: false })
export class UserModel extends Model<UserModel> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;
}