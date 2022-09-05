import { useFocusEffect } from '@react-navigation/native';
import React, { type FC, useCallback } from 'react';
import { View } from 'react-native';
import { Images } from '../../assets';
import { CustomDropDown, CustomHeader } from '../../components';
import { Strings } from '../../constants';
import { HomeActions, useAppDispatch } from '../../redux';
import { navigateOpenDrawer } from '../../services';
import styles from './HomeScreenStyle';

const data: string[] = [
  Strings.streaming,
  Strings.onTv,
  Strings.forRent,
  Strings.inTheaters,
];

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
    <View style={styles.container}>
      <CustomHeader
        leftIconName="format-align-justify"
        onPress={() => navigateOpenDrawer()}
        logoIcon={Images.logoIcon}
        rightIconName="account"
        isSearchIconVisible
        onRightPress={() => navigateOpenDrawer()}
      />
      <View style={styles.drowdownWarpperStyle}>
        <CustomDropDown data={data} />
      </View>
    </View>
  );
};

export default HomeScreen;
