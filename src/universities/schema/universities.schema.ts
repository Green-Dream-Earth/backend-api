import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export class Courses_Offered {
  @Prop({ required: true })
  course_name: string;

  @Prop({ required: true })
  course_duration: string;

  @Prop({ required: true })
  course_fee: number;

  @Prop({ required: true })
  course_description: string;

  @Prop({ required: true })
  course_slug: string;

  @Prop({ required: true })
  course_type: string;

  @Prop({ required: true })
  course_rating: number;

  @Prop({ required: true })
  course_requirements: string[];

  @Prop({ required: true })
  course_scholarships: string[];

  @Prop({ required: true })
  course_subjects: string[];
}

export class Programs_Offered {
  @Prop({ required: true })
  program_name: string;

  @Prop({ required: true })
  program_duration: string;

  @Prop({ required: true })
  program_fee: string;

  @Prop({ required: true })
  program_description: string;

  @Prop({ required: true })
  program_slug: string;

  @Prop({ required: true })
  program_requirements: string[];

  @Prop({ required: true })
  program_scholarships: string[];

  @Prop({ required: true })
  courses_offered: Courses_Offered[];
}

export class University_Fees {
  @Prop({ required: true })
  application_fee: number;

  @Prop({ required: true })
  fees_range: string;

  @Prop({ required: true })
  acceptance_expenses: number;

  @Prop({ required: true })
  total_fee: number;
}

@Schema({
  timestamps: true,
})

export class University {
  @Prop({ required: true })
  qs_ranking: number;

  @Prop({ required: true })
  times_ranking: number;

  @Prop({ required: true })
  university_location: string;

  @Prop({ required: true })
  university_description: string;

  @Prop({ required: true })
  university_address: string;

  @Prop({ required: true })
  university_name: string;

  @Prop({ required: true })
  no_of_campuses: number;

  @Prop({ required: true })
  university_type: string;

  @Prop({ required: true })
  university_slug: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  no_of_scholarships: number;

  @Prop({ required: true })
  university_website: string;

  @Prop({ required: true })
  university_logo: string;

  @Prop({ required: true })
  university_gallery: string[];

  @Prop({ required: true })
  university_rating: number;

  @Prop({ required: true })
  exams_accepted: string[];

  @Prop({ required: true })
  university_fees: University_Fees;

  @Prop({ required: true })
  programs_offered: Programs_Offered[];
}

export const UniversitySchema = SchemaFactory.createForClass(University);
