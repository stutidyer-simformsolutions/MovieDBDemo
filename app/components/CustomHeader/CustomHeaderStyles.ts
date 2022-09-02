import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    flexDirection: 'row',
    backgroundColor: Color.darkBlue,
    paddingHorizontal: horizontalScale(12),
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(5),
    backgroundColor: Color.darkBlue,
  },
  headerTitleStyle: {
    color: Color.white,
    fontWeight: '800',
    fontSize: moderateScale(15),
  },
  logoImageStyle: {
    marginLeft: horizontalScale(17),
  },
  searchImageStyle: { marginLeft: horizontalScale(2) },
});

export default styles;
