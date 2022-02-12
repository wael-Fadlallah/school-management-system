import { Module } from '@nestjs/common';
import { FamilyController } from 'src/family/family.controller';
import { StudentController } from 'src/student/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [StudentController, FamilyController],
})
export class AppModule {}
