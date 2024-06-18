import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="lista"
        options={{
          title: 'Lista de Tareas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="crearTarea"
        options={{
          title: 'Crear Tarea',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="list-status" color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}