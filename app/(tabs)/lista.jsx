import React, { useEffect, useState } from 'react';
import { View,  FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from '../styles/lista'

const ListaTareasScreen = () => {
  const [tasks, setTasks] = useState([
    {
      "title": "Limpiar la casa",
      "description": "Hacer una limpieza profunda en toda la casa.",
      "author": "Mereles Juliana",
      "date": "2024-06-18"
    },
    {
      "title": "Presentación del proyecto",
      "description": "Preparar y presentar el proyecto final en la reunión de equipo.",
      "author": "Mereles Juliana",
      "date": "2024-06-20"
    },
    {
      "title": "Visita al médico",
      "description": "Chequeo médico anual con el Dr. Rodríguez.",
      "author": "Mereles Juliana",
      "date": "2024-06-24"
    },
    {
      
      "title": "Enviar invitaciones de boda",
      "description": "Enviar las invitaciones para la boda a todos los invitados.",
      "author": "Miguel Sánchez",
      "date": "2024-06-04"
    },
    {
      "title": "Instalación de software",
      "description": "Instalar y configurar el nuevo software en las computadoras de la oficina.",
      "author": "Mereles Juliana",
      "date": "2024-06-05"
    }
  ]);


  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>Autor: {item.author}</Paragraph>
        <Paragraph>Fecha: {item.date}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
        <View style={styles.title}>Lista de Tareas</View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListaTareasScreen;

