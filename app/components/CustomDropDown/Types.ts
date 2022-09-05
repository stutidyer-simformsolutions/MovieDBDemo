import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

type DropDownDataType = {
  id?: number;
  name: string;
  endPoint?: string;
};

type CustomDropDownPropTypes = {
  data: string[];
  dropDownViewStyle?: StyleProp<ViewStyle>;
  dropDownTextStyle?: StyleProp<TextStyle>;
  dropDownTintStyle?: StyleProp<ImageStyle>;
};

export type { CustomDropDownPropTypes, DropDownDataType };
