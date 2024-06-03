import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitySchema } from './schema/universities.schema';
import { UniversitiesController } from './universities.controller';
import { UniversitiesService } from './universities.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'University', schema: UniversitySchema },
    ]),
  ],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
