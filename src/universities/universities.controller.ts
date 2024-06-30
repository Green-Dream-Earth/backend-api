import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { University } from './schema/universities.schema';
import { UniversitiesService } from './universities.service';
@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) { }

  // paginated universities list
  @Get()
  async getUniversities(@Query('page') query: number) {
    return this.universitiesService.getUniversities(query);
  }

  @Get(':id')
  async getUniversity(@Param('id') universityId: string) {
    console.log("this is id " + universityId)
    return this.universitiesService.getUniversity(universityId);
  }

  @Post()
  async addUniversity(@Body() university: University) {
    return this.universitiesService.addUniversity(university);
  }

  @Patch(':id')
  async updateUniversity(
    @Param('id') universityId: string,
    @Body() university: University,
  ) {
    return this.universitiesService.updateUniversity(universityId, university);
  }

  @Delete(':id')
  async deleteUniversity(@Param('id') universityId: string) {
    return this.universitiesService.deleteUniversity(universityId);
  }
}
