import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): string {
    return 'Hello Students!';
  }

  @Get('/:id')
  getStudent(@Param('id') id: string): string {
    return `Hello Student No.${id}!`;
  }

  @Post('create')
  addStudent(): string {
    return 'Student created!';
  }

  @Put(':id/edit')
  editStudent(): string {
    return 'Student edited!';
  }
}
