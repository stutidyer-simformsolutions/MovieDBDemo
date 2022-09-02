import { StyleSheet } from 'react-native';
import { Color, moderateScale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.darkBlue,
  },
  user: {
    color: Color.blueGreen,
    fontSize: moderateScale(20),
  },
  label: {
    color: Color.lightBlue,
    fontSize: moderateScale(15),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileView: {
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(10),
    borderColor: Color.white,
    borderBottomWidth: verticalScale(3),
  },
  profileImageContainer: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Color.darkBlue,
  },
});

export default styles;
