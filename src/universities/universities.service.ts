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
  ) { }

  async getUniversities(page: number, search?: string): Promise<University[]> {
    console.log("this is page " + page)
    const universitiesPerPage = 10;

    const regex = search ? new RegExp(search, 'i') : ""
    console.log("this is regex ", regex)

    const universities = await this.universityModel
      .find({
        $and: [
          {
            times_rankings: {
              $exists: true
            }
          },
          {
             university_name: { $regex: regex } 
          }
        ]

      })
      .sort({
        times_rankings: 1
      })
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
