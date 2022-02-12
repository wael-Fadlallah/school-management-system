import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Student } from './Student';

@Entity()
export class Family {
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
