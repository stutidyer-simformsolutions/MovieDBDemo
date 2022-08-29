import React, { FC, useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  HomeActions,
  useAppDispatch,
  useAppSelector,
  homeSelector,
} from '../../redux';

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const apiCall = async () => {
      await dispatch(
        HomeActions.getTrendingData({
          type: 'all',
          time: 'day',
        }),
      ).unwrap();
    };
    apiCall();
  }, [dispatch]);
  const { data } = useAppSelector(homeSelector);
  console.log('isLoading', data);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
