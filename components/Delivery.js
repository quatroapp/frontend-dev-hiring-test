import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import delivery_img from '../assets/delivery_image.png';

export default function Delivery({ navigation }) {
    return (
        <View style={styles.restos}>
            <View style={styles.button_space}>
                <Text style={styles.navigationLeft}> Back </Text>
                <Text style={styles.navigationRight}> Skip </Text>
            </View>

            <Image source={delivery_img} style={styles.delivery_image}/>

            <Text style={styles.title}> We'll have it delivered </Text>

            <Text style={styles.description}>
                Our hassle free delivery service is world class and
                will have your order delivered to any address of
                your specification.
            </Text>

            <TouchableOpacity
                style={styles.touchable}
            >
              <Button
                  onPress={() => navigation.navigate('RestoList')}
                  title=">"
              />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    restos: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    navigationLeft: {
        fontSize: 30,
        alignSelf: 'flex-end',
        marginHorizontal: 150
    },
    navigationRight: {
        fontSize: 30,
        alignSelf: 'flex-end',
        marginHorizontal: 150
    },
    title: {
        color: '#2180EF',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 40
    },
    description: {
        fontSize: 20,
        justifyContent: 'center',
        marginBottom: 150,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    delivery_image: {
        width: 430,
        height: 360
    },
    button_space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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