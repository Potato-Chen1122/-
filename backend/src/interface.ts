/**
 * @description User-Service parameters
 */
import { EntityModel, } from '@midwayjs/orm';
import { BaseEntity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@EntityModel()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column()
  boards: object;
}
