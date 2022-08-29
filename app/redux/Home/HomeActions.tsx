import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_KEY, baseURL } from '../../services/ApiConfig';
import { ApiErrorType, ApiResponseType } from '../../services/Types';
import type { TrendingApiRequestParams } from './HomeTypes';
import { plainToClass } from 'class-transformer';

export const getTrendingData = createAsyncThunk<
  ApiResponseType,
  TrendingApiRequestParams,
  { rejectValue: ApiErrorType }
>('trending', async (trendingData: TrendingApiRequestParams, thunkApi) => {
  const { time, type } = trendingData;
  try {
    const data = await fetch(
      baseURL + 'trending/' + type + '/' + time + '?api_key=' + AUTH_KEY,
    );
    if (data?.status >= 200 && data?.status <= 299) {
      const res = plainToClass(ApiResponseType, data.json());
      return res;
    } else {
      return thunkApi.rejectWithValue({
        status_message: 'Error',
      } as ApiErrorType);
    }
  } catch (err: any) {
    const error: string = err?.response?.data?.error?.description;
    return thunkApi.rejectWithValue({
      status_message: error ?? 'Error',
    } as ApiErrorType);
  }
});
