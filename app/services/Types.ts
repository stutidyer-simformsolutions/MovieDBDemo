export class Result {
  poster_path?: string;

  adult?: boolean;

  overview?: string;

  release_date?: string;

  genre_ids?: number[];

  id?: number;

  original_title?: string;

  original_language?: string;

  title?: string;

  backdrop_path?: string | null;

  popularity?: number;

  vote_count?: number;

  video?: boolean;

  vote_average?: number;
}

export class ApiResponseType {
  page?: number;

  results?: Result[];

  total_pages?: number;

  totla_results?: number;
}

export class ApiErrorType {
  status_message?: string;

  success?: boolean;

  status_code?: number;

  constructor(
    status_message?: string,
    success?: boolean,
    status_code?: number,
  ) {
    this.status_message = status_message;
    this.success = success;
    this.status_code = status_code;
  }
}
