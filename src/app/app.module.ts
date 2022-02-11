import { Module } from '@nestjs/common';
import { FamilyController } from 'src/family/family.controller';
import { StudentController } from 'src/student/student.controller';

@Module({
  imports: [],
  controllers: [StudentController, FamilyController],
})
export class AppModule {}
