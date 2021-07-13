import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RestoDetails() {
    return (
        <View style={styles.restoDetails}>
            <Text> Resto Details </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    restoDetails: {
        flex: 1
    }
});