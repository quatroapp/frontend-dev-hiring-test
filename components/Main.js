import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import splash_img from '../assets/splash_image.png';

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.navigationRight}> Skip </Text>

            <Image source={splash_img} style={styles.splash_image}/>

            <Text style={styles.title}>
                Find The Food You Want
            </Text>

            <Text style={styles.description}>
                Our app helps you dinf the right food for every mood, any time & any day
            </Text>

            <TouchableOpacity
                style={styles.touchable}
            >
              <Button
                  onPress={() => navigation.navigate('Delivery')}
                  title=">"
              />
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
    navigationRight: {
      fontSize: 30,
      alignSelf: 'flex-end'
    },
    title: {
      color: '#2180EF',
      fontSize: 50,
      textAlign: 'center',
      fontWeight: 'bold',
      marginHorizontal: 70
    },
    description: {
      fontSize: 20,
      justifyContent: 'center',
      marginBottom: 150,
      marginHorizontal: 40,
      textAlign: 'center'
    },
    splash_image: {
      width: 330,
      height: 380,
    },
    touchable: {
      borderWidth: 1,
      borderColor: '#2180EF',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      backgroundColor: '#2180EF',
      borderRadius: 50
    }
});