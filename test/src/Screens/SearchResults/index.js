import React  from 'react';
import { SvgUri } from 'react-native-svg';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

export const SearchResults = ({ route ={}, navigation }) => {
  const { params = {} } = route;
  const { date } = params;
  const { flag, capital, population } = date;

  const getWeather = ( ) => {
    fetch(`http://api.weatherstack.com/current?access_key=906db1feee33d93ffd0ff8514d0163b8&query=${capital}`)
      .then(res => res.json())
      .then(data => {
        navigation.navigate('Weather', {
          data,
        });
      })
      .catch(err => console.log(err))
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Capital: {capital}</Text>
      <Text>Population: {population}</Text>
      <Text>latlng: lat {date.latlng[0]} lng {date.latlng[1]}</Text>
        <SvgUri
          width='100%'
          height="600"
          uri={flag}
        />

      <Button
        title={'Capital Weather'}
        onPress={getWeather}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 200
  },
  flag: {
    width: 66,
    height: 58,
  },
});
