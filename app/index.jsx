
import { Link } from 'expo-router';
import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles/index';


export default function IndexScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/c8/fd/f7/c8fdf7fd61e5b7a2971b57325216ce03.jpg' }}
              style={styles.logo}
            />
          </View>
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>💜Bienvenidos!!💜</Text>
              <Text style={styles.Text}>Tareas💻</Text>
              <Text style={styles.subtitle}>Mantene tus tareas en orden!!</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Link href={"/auth/login"}>
                  <Text style={styles.inicioBotton}>Iniciar</Text>
                </Link>
              </View>
              <View style={styles.button}>
                <Link href={"/auth/login"}>
                  <Text style={styles.inicioBotton}>Registro</Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

