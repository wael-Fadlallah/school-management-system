import { Injectable } from '@nestjs/common';
import { Student, StudentDto } from '../entities/Student';

@Injectable()
export class StudentService {
  async insert(student: StudentDto): Promise<Student> {
    const studentEnity: Student = Student.create(student);
    await studentEnity.save();
    return studentEnity;
  }

  async getAll(): Promise<Student[]> {
    const students: Student[] = await Student.find();
    return students;
  }

  async getById(id: number): Promise<Student> {
    const student: Student = await Student.findOne({ where: { id } });
    return student;
  }

  async update(id: number, student: StudentDto): Promise<boolean | Student> {
    const affected: number = (await Student.update(id, student)).affected;
    return affected ? this.getById(id) : false;
  }
}
