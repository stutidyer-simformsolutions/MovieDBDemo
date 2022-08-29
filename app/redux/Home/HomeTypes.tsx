import { ApiResponseType } from '../../services/Types';

export type TrendingApiRequestParams = {
  type: string;
  time: string;
};

export type InitialStateType = {
  isLoading: boolean;
  data: ApiResponseType | {};
  error?: string | null;
};
