import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  AfterCreate,
  AfterUpdate,
  AfterDestroy,
} from 'sequelize-typescript';

@Table({ tableName: 'Lists' })
export class List extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: string;

  @Column
  task: string;

  // @AfterCreate
  // logCreate() {
  //   console.log('Created with id', this.id);
  // }

  // @AfterUpdate
  // logUpdate() {
  //   console.log('Updated with id', this.id);
  // }

  // @AfterDestroy
  // logDestroy() {
  //   console.log('Destroyd with id', this.id);
  // }
}
