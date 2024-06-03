import {
  Programs_Offered,
  University_Fees,
} from '../schema/universities.schema';

export class UniversityDto {
  qs_ranking: number;
  times_ranking: number;
  university_location: string;
  university_description: string;
  university_address: string;
  university_name: string;
  no_of_campuses: number;
  university_type: string;
  university_slug: string;
  country: string;
  no_of_scholarships: number;
  university_website: string;
  university_logo: string;
  university_gallery: string[];
  university_rating: number;
  exams_accepted: string[];
  university_fees: University_Fees;
  programs_offered: Programs_Offered[];
}
