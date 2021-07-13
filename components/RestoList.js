import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RestoList() {
    return (
        <View style={styles.restos}>
            <Text> Resto List </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    restos: {
        flex: 1
    }
});