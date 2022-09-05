import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drowdownWarpperStyle: {
    marginTop: verticalScale(14),
    paddingVertical: verticalScale(8),
    marginLeft: horizontalScale(14),
  },
});

export default styles;
