import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import splash_img from '../assets/splash_image.png';

export default function Main() {
    return (
        <View style={styles.container}>
        <Image source={splash_img} style={styles.splash_image}/>

        <Text style={styles.title}>
            Find The Food You Want
        </Text>

        <Text style={{fontSize: 30, justifyContent: 'center', marginBottom: 150}}>
            Our app helps you dinf the right food for every mood, any time & any day
        </Text>

        <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={styles.button}>
            <Text style={styles.buttonText}>Start finding !</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#2180EF',
      fontSize: 50,
      alignItems: 'center',
    },
    splash_image: {
      width: 500,
      height: 400,
      marginTop: -100,
      marginBottom: 50
    },
    button: {
      backgroundColor: '#2180EF',
      padding: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    }
});