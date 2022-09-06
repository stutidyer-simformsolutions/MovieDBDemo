import React, { type FC } from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  CustomCard,
  CustomDropDown,
  type CustomCardPropType,
} from '../../../components';
import type { HomeComponentPropType } from '../Types';
import styles from './HomeComponentStyles';

const renderMovieItem = (
  { item }: { item: CustomCardPropType },
  navigateToDetailsScreen: () => {},
) => (
  <CustomCard
    imageURL={item?.imageURL}
    userScore={item?.userScore}
    title={item?.title}
    subTitle={item?.subTitle}
    onCardPress={navigateToDetailsScreen}
  />
);
const renderMoviesList = (
  dataList: CustomCardPropType[],
  navigateToDetailsScreen: () => {},
) => {
  return (
    <FlatList
      data={dataList}
      renderItem={item => renderMovieItem(item, navigateToDetailsScreen)}
      horizontal={true}
      contentContainerStyle={styles.itemContainerStyle}
    />
  );
};
const HomeComponent: FC<HomeComponentPropType> = ({
  title,
  dropDowndData,
  dataList,
  navigateToDetailsScreen,
}) => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.drowdownWarpperStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <CustomDropDown data={dropDowndData} />
        {renderMoviesList(dataList, navigateToDetailsScreen)}
      </View>
    </View>
  );
};

export default HomeComponent;
