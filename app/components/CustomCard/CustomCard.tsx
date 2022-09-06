import React, { type FC } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styles from './CustomCardStyles';
import type { CustomCardPropType } from './Types';

const CustomCard: FC<CustomCardPropType> = ({
  imageURL,
  userScore,
  title,
  subTitle,
}) => (
  <>
    <TouchableOpacity style={styles.mainContainerStyle}>
      <Image source={imageURL} style={styles.imageStyle} />
      <View style={styles.roundViewStyle}>
        <Text style={styles.userScoreTextStyle}>{userScore}</Text>
      </View>
      <View style={styles.bottomViewStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.subTitleTextStyle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  </>
);

export default CustomCard;
