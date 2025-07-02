import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class UserModel extends Model<UserModel> {
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  declare name: string;

  @Column
  declare email: string;

  @Column
  declare password: string;
}
