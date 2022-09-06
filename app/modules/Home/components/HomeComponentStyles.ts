import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
  },
  titleStyle: {
    fontSize: moderateScale(25),
    color: Color.black,
    fontWeight: '500',
    paddingBottom: verticalScale(10),
  },
  drowdownWarpperStyle: {
    marginTop: verticalScale(14),
    paddingVertical: verticalScale(8),
    marginLeft: horizontalScale(14),
  },
  itemContainerStyle: { flexDirection: 'row' },
});

export default styles;
