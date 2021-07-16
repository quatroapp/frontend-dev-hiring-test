import React, { useState, useEffect } from 'react';
import { Image, View, SafeView, Text, FlatList, SectionList, StyleSheet, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native';
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
        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});
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
        <View style={styles.resto} onPress={() => getResto(item)}>

          <TouchableOpacity onPress={() => getResto(item)}>

            <Image
              style={styles.tinyLogo}
              source={{
                uri: item.image
              }}
            />
          </TouchableOpacity>

          <Text style={styles.restoStyle} onPress={() => getResto(item)}>
            {item.name.toUpperCase()}
          </Text>

          <Text style={{
              fontSize: 10,
              marginLeft: -60,
              marginTop: 30
            }}
            onPress={() => getResto(item)}
            >
              {item.location}
          </Text>

        </View>
      );
    };

    const RestoSeparatorView = () => {
      return (
        <View
          style={{
            height: 20,
            justifyContent: 'space-between',
            width: '100%',
          }}
        />
      );
    };

    const getResto = (resto) => {
        alert('Resto : ' + resto.id + ' Name : ' + resto.name);
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          value={search}
          placeholder="Search Resto here..."
        />

      <ScrollView nestedScrollEnabled={true}>

        <View>
          <MapView style={styles.map}
            initialRegion={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>

        <FlatList
          scrollEnabled={false}
          data={filteredResto}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={RestoSeparatorView}
          renderItem={RestoView}/>

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  restoStyle: {
    padding: 10,
    flexDirection: 'column',
    marginLeft: 40
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 400,
    marginBottom: 10
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  resto: {
    flexDirection: 'row',
  }
});