export type RESULT = {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export class ApiResponseType {
  page?: number;

  results?: RESULT[];

  total_pages?: number;

  totla_results?: number;
}

export type ApiErrorType = {
  status_message?: string | null;
  success?: boolean;
  status_code?: number;
};
