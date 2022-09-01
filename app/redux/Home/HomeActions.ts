import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ApiErrorType,
  ApiResponseType,
  AUTH_KEY,
  baseURL,
} from '../../services';
import type { TrendingApiRequestParams } from './HomeTypes';

export const getTrendingData = createAsyncThunk<
  ApiResponseType,
  TrendingApiRequestParams,
  { rejectValue: ApiErrorType }
>('trending', async (trendingData: TrendingApiRequestParams, thunkApi) => {
  const { time, type } = trendingData;
  try {
    const response = await fetch(
      `${baseURL}/trending/${type}/${time}?api_key=${AUTH_KEY}`,
    );
    const json = await response.json();
    return json;
  } catch (err: any) {
    const error: string = err?.response?.data?.error?.description;
    thunkApi.rejectWithValue(new ApiErrorType(error ?? 'Error'));
  }
});
