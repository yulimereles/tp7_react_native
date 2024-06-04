import  { useState } from 'react';
import React from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Cards = () => {
    const width = Dimensions.get('window').width;
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>Modulo N° 1</Card.Title>
                    <Card.Divider />
                    <Image style={styles.image} source={require('../../assets/images/')} />
                    <Text style={styles.text}>Curso de Programación movil basico.</Text>
                    <Button
                        onPress={() => navigation.navigate('')}
                        icon={
                            <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                        }
                        buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                        title={'Registarse'}
                    />
                </Card>
            </View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>Modulo N° 2</Card.Title>
                    <Card.Divider />
                    <Image style={styles.image} source={require('../../assets/img/expo_reactnative.png')} />
                    <Text style={styles.text}>Curso de Programación movil avanzado.</Text>
                    <Button
                        onPress={() => navigation.navigate('')}
                        icon={
                            <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                        }
                        buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                        title={'Iniciar Sesión'}
                    />
                </Card>
            </View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>Modulo N° 3</Card.Title>
                    <Card.Divider />
                    <Image style={styles.image} source={require('../../assets/img/expo_reactnative.png')} />
                    <Text style={styles.text}>Curso de Programación movil avanzado.</Text>
                    <Button
                        onPress={() => navigation.navigate('')}
                        icon={
                            <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                        }
                        buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(2,76,139,255)' }}
                        title={'Iniciar Sesión'}
                    />
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginRight: 10,
        borderRadius: 20,
        alignContent: 'center',
        color: '#FFFFF',
    },
    icon: {
        marginRight: 5,
    },
    image: {
        width: 320,
        height: 150,
        resizeMode: 'contain',
        marginTop: -10,
        marginVertical: 0,
        borderRadius: 20,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
        borderColor: '#000000',
        marginBottom: 5,
    },
});



export default Cards;