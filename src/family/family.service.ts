import { Injectable } from '@nestjs/common';
import { FamilyDto, Family } from '../entities/Family';

@Injectable()
export class FamilyService {
  async insert(member: FamilyDto): Promise<Family> {
    const memberEnitiy: Family = Family.create(member);
    await memberEnitiy.save();
    return memberEnitiy;
  }

  async getAll(): Promise<Family[]> {
    const families: Family[] = await Family.find();
    return families;
  }

  async getById(id: number): Promise<Family> {
    const member: Family = await Family.findOne({ where: { id } });
    return member;
  }

  async getByStudentId(studentId: number): Promise<Family[]> {
    const members: Family[] = await Family.find({
      where: { student_id: studentId },
    });
    return members;
  }

  async update(id: number, member: FamilyDto): Promise<boolean | Family> {
    const affected: number = await (await Family.update(id, member)).affected;
    return affected ? this.getById(id) : false;
  }
}
