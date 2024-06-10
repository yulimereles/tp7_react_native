import React, { useEffect, useState } from 'react';
import { View,  FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from '../styles/lista'

const ListaTareasScreen = () => {
  const [tasks, setTasks] = useState([
    {
      "title": "Comprar víveres",
      "description": "Comprar frutas, verduras y otros productos para la semana.",
      "author": "Juan Pérez",
      "date": "2024-06-01"
    },
    {
      "title": "Reunión con el equipo",
      "description": "Reunión semanal para revisar el progreso de los proyectos.",
      "author": "Ana García",
      "date": "2024-06-02"
    },
    {
      "title": "Actualizar el sitio web",
      "description": "Agregar nuevas funcionalidades y corregir errores en el sitio web.",
      "author": "Luis Martínez",
      "date": "2024-06-03"
    },
    {
      "title": "Enviar reporte mensual",
      "description": "Preparar y enviar el reporte mensual de ventas y operaciones.",
      "author": "María Rodríguez",
      "date": "2024-06-04"
    },
    {
      "title": "Curso de capacitación",
      "description": "Asistir al curso de capacitación sobre nuevas tecnologías.",
      "author": "Carlos Fernández",
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
        <View>Lista de Tareas</View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListaTareasScreen;

