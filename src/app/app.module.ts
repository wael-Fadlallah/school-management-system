import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { Student } from 'src/entities/Student';
import { Family } from 'src/entities/Family';
import { FamilyModule } from 'src/family/family.module';

@Module({
  imports: [
    StudentModule,
    FamilyModule,
    TypeOrmModule.forFeature([Student, Family]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'school-system',
      entities: [Student, Family],
      synchronize: true,
      migrations: ['dist/migrations/**/*.js'],
    }),
  ],
  controllers: [],
})
export class AppModule {}
