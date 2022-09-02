import { View } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { type FC } from 'react';
import styles from './CustomHeaderStyles';
import type { CustomHeaderPropsType } from './Types';
import { Color } from '../../theme';
import { Image, Text } from 'react-native';
const CustomHeader: FC<CustomHeaderPropsType> = ({
  leftIconName,
  onPress,
  title,
  logoIcon,
  rightIconName,
  onRightPress,
  isSearchIconVisible = false,
  onSearchPress,
}) => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.container}>
        <Icon
          name={leftIconName}
          size={25}
          color={Color.lightGreen}
          onPress={onPress}
        />
        {title ? (
          <Text style={styles.headerTitleStyle}>{title}</Text>
        ) : (
          <Image source={logoIcon} style={styles.logoImageStyle} />
        )}
        {rightIconName && (
          <Icon
            name={rightIconName}
            size={25}
            color={Color.lightGreen}
            onPress={onRightPress}
          />
        )}
      </View>
      {isSearchIconVisible && (
        <Icon
          name={'magnify'}
          size={25}
          color={Color.lightGreen}
          onPress={onSearchPress}
          style={styles.searchImageStyle}
        />
      )}
    </View>
  );
};

export default CustomHeader;
