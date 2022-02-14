import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { Student } from 'src/entities/Student';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'school-system',
      entities: [Student],
      synchronize: true,
      migrations: ['dist/migrations/**/*.js'],
    }),
  ],
  controllers: [],
})
export class AppModule {}
