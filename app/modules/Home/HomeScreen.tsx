import { useFocusEffect } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { Text, View } from 'react-native';
import { HomeActions, useAppDispatch } from '../../redux';

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  useFocusEffect(
    useCallback(() => {
      dispatch(
        HomeActions.getTrendingData({
          type: 'all',
          time: 'day',
        }),
      );
    }, [dispatch]),
  );

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
