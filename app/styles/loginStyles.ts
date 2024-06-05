import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c6b1c9',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    paddingBottom: verticalScale(100), 
  },
  inicioContainer: {
    alignItems: "center",
    padding: moderateScale(60),
    width: '100%',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomWidth: scale(2),
    borderBottomColor: 'purple',
  },
  logo: {
    width: scale(170),
    height: verticalScale(170),
    marginTop: verticalScale(0),
    borderRadius: 30
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  input: {
    width: '80%',
    height: verticalScale(40),
    borderColor: 'purple',
    borderWidth: 2,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
    paddingHorizontal: moderateScale(10),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(10),
    width: '80%',
    borderRadius: moderateScale(20),
    backgroundColor: "purple",
    padding: 10,
    textAlignVertical: "center"
  },
  ingresoBotton: {
    textAlign: "center",
    width: "300%",
    padding: 10,
    color: "white",
  },
  detail: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    padding: moderateScale(10),
    backgroundColor: "purple",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomColor: 'purple',
  },
  detailText: {
    fontSize: moderateScale(16),
    color: 'purple',
  }
});

export default styles;
