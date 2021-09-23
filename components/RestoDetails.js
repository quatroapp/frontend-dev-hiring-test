import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RestoDetails({ item }) {

    const getResto = (resto) => {
      alert('Resto : ' + resto.id + ' Name : ' + resto.name);
    };

    return (
      <View style={styles.resto} onPress={() => getResto(item)}>

        <TouchableOpacity onPress={() => getResto(item)}>

          <Image
            style={styles.tinyLogo}
            source={{
                uri: item.image
            }}
          />

        </TouchableOpacity>

        <View style={styles.text} onPress={() => getResto(item)}>

          <Text style={styles.restoStyle} onPress={() => getResto(item)}>
            {item.name.toUpperCase()}
          </Text>

          <Text style={styles.desc} onPress={() => getResto(item)}>
            {item.location}
          </Text>

        </View>

      </View>
    );
};

const styles = StyleSheet.create({
  resto: {
    flexDirection: 'row',
    padding: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  restoStyle: {
    marginTop: 2,
    marginBottom: 2,
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: 20,
  }
});