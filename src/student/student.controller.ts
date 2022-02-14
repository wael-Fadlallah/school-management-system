import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Student } from 'src/entities/Student';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): Promise<Student[]> {
    return this.studentService.getAll();
  }

  @Get('/:id')
  getStudent(@Param('id') id: string): Promise<Student> {
    return this.studentService.getById(id);
  }

  @Post('create')
  async addStudent(@Body('student') student: Student): Promise<Student> {
    // TODO: validate the student object
    return await this.studentService.insert(student);
  }

  @Put(':id/edit')
  async editStudent(
    @Param('id') id: string,
    @Body('student') student: Student,
  ): Promise<any> {
    // TODO: validate the student object
    return await this.studentService.update(id, student);
  }
}
