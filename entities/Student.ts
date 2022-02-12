import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
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

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
