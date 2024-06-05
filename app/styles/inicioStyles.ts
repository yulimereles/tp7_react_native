import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#c6b1c9',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(10),
    },
    logo: {
      width: scale(170),
      height: verticalScale(170),
      marginTop: verticalScale(0),
      borderRadius: 30
    },
    contentContainer: {
      paddingHorizontal: moderateScale(20),
      alignItems: 'center',
    },
    title: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
      color: 'black',
      marginBottom: verticalScale(10),
    },
    subtitle: {
      fontSize: moderateScale(16),
      color: 'purple',
      textAlign: 'center',
      marginBottom: verticalScale(20),
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: verticalScale(10),
      width: '100%',
      padding:10,
      borderRadius: moderateScale(20),
      backgroundColor: "purple",
      textAlignVertical: "center",
      color: "white",
    },
  });
export default styles;