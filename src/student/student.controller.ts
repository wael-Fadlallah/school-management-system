import { Body, Controller, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
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
  getStudent(@Param('id') id: number): Promise<Student> {
    return this.studentService.getById(id);
  }

  @Post('create')
  async addStudent(@Body('student') student: Student): Promise<Student> {
    // TODO: validate the student object
    return await this.studentService.insert(student);
  }

  @Put(':id/edit')
  async editStudent(
    @Param('id') id: number,
    @Body('student') student: Student,
    @Res() res: Response,
  ): Promise<any> {
    // TODO: validate the student object
    console.log(await this.studentService.getById(id));
    if (await this.studentService.getById(id)) {
      const updated = await this.studentService.update(id, student);
      return res.json(updated);
    } else return res.status(404).json('Not found');
  }
}
