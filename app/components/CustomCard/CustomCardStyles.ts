import { StyleSheet } from 'react-native';
import {
  Color,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../theme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    marginVertical: verticalScale(20),
  },
  imageStyle: {
    height: verticalScale(200),
    width: horizontalScale(150),
    borderRadius: 20,
  },
  roundViewStyle: {
    borderRadius: 20,
    top: -30,
    left: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
    width: horizontalScale(40),
    backgroundColor: Color.darkBlue,
    opacity: 0.9,
  },
  userScoreTextStyle: {
    color: Color.white,
    backgroundColor: Color.darkBlue,
    fontSize: moderateScale(10),
  },
  bottomViewStyle: {
    marginVertical: verticalScale(10),
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: moderateScale(15),
    color: Color.black,
  },
  subTitleTextStyle: {
    paddingTop: moderateScale(5),
    color: Color.lightGrey,
  },
});

export default styles;
