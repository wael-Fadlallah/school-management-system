import { getRepository } from 'typeorm';
import { Student } from '../entities/Student';

export const createStudent = async (student: Student): Promise<Student> => {
  const studentRepository = getRepository(Student);
  return await studentRepository.create(student);
};
