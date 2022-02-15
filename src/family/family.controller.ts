import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Family } from 'src/entities/Family';
import { FamilyService } from './family.service';

@Controller('families/:studnet')
export class FamilyController {
  constructor(private readonly familyService: FamilyService) {}

  @Get()
  getStudntFamily(): Promise<Family[]> {
    return this.familyService.getAll();
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
