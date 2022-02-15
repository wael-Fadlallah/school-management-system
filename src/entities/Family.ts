import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Student } from './Student';

@Entity()
export class Family extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToOne(() => Student)
  @JoinColumn()
  student_id: Student;

  @Column()
  relation_to_student: string;

  @Column()
  address: string;

  @Column({ type: 'date' })
  dob: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}

export class FamilyDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly student_id: Student;
  readonly address: string;
  readonly relation_to_student: string;
  readonly dob: Date;
}
