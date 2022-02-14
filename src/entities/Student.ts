import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  nationality: string;

  @Column({ type: 'date' })
  dob: Date;

  @Column()
  status: number;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}

export class StudentDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly nationality: string;
  readonly dob: Date;
}
