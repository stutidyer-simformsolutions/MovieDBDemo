import { Dimensions, Platform, ScaledSize } from 'react-native';
import type { MetricsTypes } from './Types';

const { width, height }: ScaledSize = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 375;
const guidelineBaseHeight: number = 812;

const scale = (size: number): number => (width / guidelineBaseWidth) * size;
const horizontalScale = (size: number): number =>
  (width / guidelineBaseWidth) * size;
const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

// Used via Metrics.baseMargin
const Metrics: MetricsTypes = {
  zero: 0,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  textFieldRadius: 6,
  borderLineWidth: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? verticalScale(64) : verticalScale(54),
  buttonRadius: 4,
  icons: {
    tiny: 16,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
  headerShadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 2.5 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  size: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
    xxxl: 30,
  },
};
export {
  scale,
  verticalScale,
  horizontalScale,
  moderateScale,
  Metrics,
  height,
};
