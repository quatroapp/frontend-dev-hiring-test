import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import splash_img from '../assets/splash_image.png';
import axios from 'axios';

export default function RestoList({ navigation }) {
    const [resto, setResto] = useState();

    useEffect(() => {
        async function fetchResto() {
            try {
                const asyncResponse = await axios("https://http://localhost:3000/restos");
                const { value } = asyncResponse.data;
                setResto(value.resto);
            } catch (err) {
                console.error(err);
            }
        }
        fetchJoke();
    }, [more]);

    return (
        <View style={styles.restos}>
            <Text> Back </Text>
            <Text> Skip </Text>

            <Text> Resto List </Text>
            <Text>{`${resto}`}</Text>
            <Button
                title="See resto details"
                onClick={loadMore}
                onPress={() => navigation.navigate('RestoDetails')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    restos: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});