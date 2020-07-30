import React  from 'react';

import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  StyleSheet
} from 'react-native';

export const SearchResults = ({ route ={}, navigation }) => {
  const {params = {}} = route;
  const { date } = params;
  const {flag, capital, population} = date;

  console.log('date', date)

  const getWeather = ( ) => {
    fetch(`http://api.weatherstack.com/current?access_key=906db1feee33d93ffd0ff8514d0163b8&query=${capital}`)
      .then(res => res.json())
      .then(data => {
        navigation.navigate('Weather', {
          data,
        });
      })
      .catch(err => console.log(err))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Capital: {capital}</Text>
      <Text>Population: {population}</Text>
      <Text>latlng: lat {date.latlng[0]} lng {date.latlng[1]}</Text>
      {/*<View style={styles.container}>*/}
        <Image
          onLoad={() => console.log('onload')}
          onLoadStart={() => console.log('onLoadStart')}
          // style={styles.flag}
          source={{ uri: flag, width: 100, height: 100 }}
        />
      {/*</View>*/}

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
    backgroundColor: 'red'
  },
  flag: {
    width: 66,
    height: 58,
  },
});
