import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('families/:studnet')
export class FamilyController {
  @Get()
  getStudntFamily(): Array<string> {
    return [];
  }

  @Get('member/:id')
  getStudent(@Param('id') id: string): string {
    return `Hello Student faimily member No.${id}!`;
  }

  @Post('create')
  addStudent(): string {
    return 'Student family member created!';
  }

  @Put('edit/:id')
  editStudent(@Param('id') id: string): string {
    return `Student family member ${id} edited!`;
  }
}
