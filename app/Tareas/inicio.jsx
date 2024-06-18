
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Stack, useRouter } from 'expo-router';
import styles  from '../styles/inicioStyles';



export default function InicioScreen() {
  const navigation = useRouter();

  const handleGetStarted = () => {
    navigation.push('/lista'); 
  };
  const handleGetOut = () => {
    navigation.push('/'); 
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false}} />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/cf/98/02/cf980297f217854971f330adb1514330.jpg' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Que gusto que estes acá!!💜</Text>
          <Button mode="contained" onPress={handleGetStarted} style={styles.button}>
            Iniciar ☑️
          </Button>
          <Button mode="contained" onPress={handleGetOut} style={styles.button}>
            Volver al inicio✖️
          </Button>
        </View>
      </View>
    </>
  );
}

