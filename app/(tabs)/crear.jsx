import React from 'react';
import { View } from 'react-native';
import { TextInput as PaperTextInput, Button, Text } from 'react-native-paper';
import styles from '../styles/crear'

const CrearTarea = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text variant="headlineLarge">Crear Tarea</Text>
        </View>  
        <PaperTextInput
            label="Título"
            style={styles.inputText}
        />
        <PaperTextInput
            label="Descripción"
            multiline
            numberOfLines={4}
            style={styles.inputText}
        />
        <PaperTextInput
            label="Autor"
            style={styles.inputText}
        />
        <PaperTextInput
            label="Fecha"
            style={styles.inputText}
            keyboardType="numeric"
        />
        <Button style={styles.button} mode="contained" onPress={() => {}}>
            Crear
        </Button>
    </View>
  );
};

export default CrearTarea;
