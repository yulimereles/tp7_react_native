import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export const styles = StyleSheet.create({
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
  titleText: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: "black",
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 80
  },
  logo: {
    justifyContent:'center',
    alignItems: 'center',
    width: scale(390),
    height: verticalScale(250),
    marginTop: verticalScale(3),
    borderRadius: 30,
    position: 'relative',
  },
  Text: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color:'purple'
  },
  subtitle: {
    fontSize: moderateScale(17),
    fontStyle: 'italic',
    color: 'purple',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top:100
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(10),
    width: '80%',
    borderRadius: moderateScale(20),
    backgroundColor: "purple",
    padding: 20,
    textAlignVertical: "center"
  },
  inicioBotton: {
    textAlign: "center",
    width: "200%",
    padding: 100,
    color: "white",
    textTransform: "uppercase",

  },
  imageContainer:{
    top: 45
  }
  });