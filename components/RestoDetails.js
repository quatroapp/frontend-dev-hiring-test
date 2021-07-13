import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RestoDetails({ navigation }) {
    return (
        <View style={styles.restoDetails}>
            <Text> Resto Details </Text>
            <Button
                title="See resto details"
                onPress={() => navigation.navigate('RestoList')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    restoDetails: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});