import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UniversityDto } from './dto/universities.dto';
import { University } from './schema/universities.schema';

@Injectable()
export class UniversitiesService {
  constructor(
    @InjectModel(University.name)
    private universityModel: mongoose.Model<University>,
  ) {}

  async getUniversities(page: number): Promise<University[]> {
    const universitiesPerPage = 10;
    const universities = await this.universityModel
      .find()
      .skip((page - 1) * universitiesPerPage)
      .limit(universitiesPerPage)
      .exec();
    return universities;
  }

  async getUniversity(universityId: string): Promise<University> {
    return this.universityModel.findById(universityId).exec();
  }

  async addUniversity(university: UniversityDto): Promise<University> {
    const newUniversity = new this.universityModel(university);
    return newUniversity.save();
  }

  async updateUniversity(
    universityId: string,
    university: UniversityDto,
  ): Promise<University> {
    return this.universityModel
      .findByIdAndUpdate(universityId, university)
      .exec();
  }

  async deleteUniversity(universityId: string): Promise<University> {
    return this.universityModel.findByIdAndDelete(universityId).exec();
  }
}
