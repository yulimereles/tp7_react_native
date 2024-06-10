import { Link,Stack,useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image,  TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/loginStyles';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const validateUsername = (username: string) => {
    return username.length >= 5 && username.length <= 10;
  };

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}$/;
    return regex.test(password);
  };

  const handleSignIn = () => {
    if (!validateUsername(username)) {
      Alert.alert('Error de Validación', 'Por favor, modifique su nombre de usuario a 5-10 caracteres.');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error de Validación', 'Contraseña: mínimo 5 caracteres con 1 mayúscula, 1 minúscula y 1 símbolo.');
      return;
    }

    router.replace('/Tareas/inicio');
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Login 🔐' }} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.inicioContainer}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/c6/27/01/c62701fb88ca63dcd673f3a0996159de.jpg' }}
              style={styles.logo}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.ingresoBotton}>Ingresar ➡️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}