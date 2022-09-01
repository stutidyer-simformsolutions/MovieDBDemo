import { Theme } from 'native-base';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface MetricsTypes {
  zero: number;
  baseMargin: number;
  doubleBaseMargin: number;
  smallMargin: number;
  textFieldRadius: number;
  borderLineWidth: number;
  screenWidth: number;
  screenHeight: number;
  navBarHeight: number;
  buttonRadius: number;
  icons: {
    tiny: number;
    small: number;
    medium: number;
    large: number;
    xl: number;
  };
  images: {
    small: number;
    medium: number;
    large: number;
    logo: number;
  };
  headerShadow: {
    shadowColor: string;
    shadowOffset: { width: string | number; height: string | number };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  size: {
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
  };
}

export interface ApplicationStylesTypes {
  nativeBaseStyle: Theme;
  screen: {
    mainContainer: ViewStyle;
    backgroundImage: ViewStyle;
    normalFooterStyle: ViewStyle;
    whiteContainer: ViewStyle;
    noBorderStyle: ViewStyle;
    topBorderRadius: ViewStyle;
    bottomBorderRadius: ViewStyle;
    topLeftBorderRadius: ViewStyle;
    topRightBorderRadius: ViewStyle;
    headerLeftButtonImageStyle: ImageStyle;
    headerRemoveSeparatorStyle: ViewStyle;
  };
  form: {
    textInputContainerStyle: ViewStyle;
    textInputBorderStyle: ViewStyle;
    textInputStyle: {
      fontFamily: string;
      height: string;
      fontSize: number;
      borderWidth: number;
      paddingLeft: number;
    };
    formContainer: ViewStyle;
    formInputs: ViewStyle;
    errorText: TextStyle;
  };
}
export interface HeaderTextTypes {
  fontWeight: string;
  fontSize: number;
}
export interface FontsTypes {
  h1: HeaderTextTypes;
  h2: HeaderTextTypes;
  h3: HeaderTextTypes;
  h4: HeaderTextTypes;
  h5: HeaderTextTypes;
  h6: HeaderTextTypes;
  normal: HeaderTextTypes;
  description: HeaderTextTypes;
  label: HeaderTextTypes;
}
