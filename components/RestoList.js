import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RestoList({ navigation }) {
    return (
        <View style={styles.restos}>
            <Text> Resto List </Text>
            <Button
                title="See resto details"
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