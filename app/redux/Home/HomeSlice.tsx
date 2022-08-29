import {
  ActionReducerMapBuilder,
  createSlice,
  Draft,
  PayloadAction,
} from '@reduxjs/toolkit';
import { ApiResponseType } from '../../services/Types';
import { getTrendingData } from './HomeActions';
import type { InitialStateType } from './HomeTypes';
import type { RootState } from '../index';

const initialState: InitialStateType = {
  isLoading: false,
  data: {},
  error: null,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    reset: state => {
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<InitialStateType>) => {
    builder.addCase(
      getTrendingData.pending,
      (state: Draft<InitialStateType>) => {
        state.isLoading = true;
        state.error = null;
      },
    );

    builder.addCase(
      getTrendingData.fulfilled,
      (
        state: Draft<InitialStateType>,
        action: PayloadAction<ApiResponseType>,
      ) => {
        if (action.payload) state.data = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(getTrendingData.rejected, (state, { payload }) => {
      if (payload) state.error = payload.status_message;
      state.isLoading = false;
    });
  },
});

export const homeSelector = (state: RootState) => {
  return state.home;
};
export const HomeActions = {
  ...homeSlice.actions,
  getTrendingData,
};
export const homeReducer = homeSlice.reducer;
