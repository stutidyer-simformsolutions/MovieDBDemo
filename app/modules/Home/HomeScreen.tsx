import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { Images } from '../../assets';
import { CustomHeader } from '../../components';
import type { NavigationDataType } from '../../navigation';
import { HomeActions, useAppDispatch } from '../../redux';
import styles from './HomeScreenStyle';

const HomeScreen: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationDataType>();

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
    <View style={styles.container}>
      <CustomHeader
        leftIconName="format-align-justify"
        onPress={() => navigation.openDrawer()}
        logoIcon={Images.logoIcon}
        rightIconName="account"
        isSearchIconVisible
        onRightPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default HomeScreen;
