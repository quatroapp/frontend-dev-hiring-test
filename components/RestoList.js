import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, FlatList, Dimensions, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function RestoList({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredResto, setFilteredResto] = useState([]);
    const [restos, setRestos] = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();

      fetch("https://my-json-server.typicode.com/blacky-yg/frontend-dev-hiring-test/restos")
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredResto(responseJson);
          setRestos(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [location]);

    let text = 'Waiting..';

    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    const searchFilterFunction = (text) => {
      if (text) {
        const newData = restos.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredResto(newData);
        setSearch(text);
      } else {
        setFilteredResto(restos);
        setSearch(text);
      }
    };

    const RestoView = ({ item }) => {
      return (
        <View>
          <Text style={styles.restoStyle} onPress={() => getResto(item)}>
            {item.id}
            {'.'}
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'http://placeimg.com/640/480/sports'
              }}
            />
            {item.name.toUpperCase()}
          </Text>
        </View>
      );
    };

    const RestoSeparatorView = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };

    const getResto = (resto) => {
        alert('Resto : ' + resto.id + ' Name : ' + resto.name);
    };

    return (
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Resto here..."
          value={search}
        />
        <ScrollView>
          <MapView style={styles.map}
            initialRegion={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <FlatList
            data={filteredResto}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={RestoSeparatorView}
            renderItem={RestoView}
          />
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  restoStyle: {
    padding: 10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 400,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});