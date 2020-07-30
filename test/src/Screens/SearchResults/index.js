import React  from 'react';

import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  StyleSheet
} from 'react-native';

export const SearchResults = ({ route ={} }) => {
  const {params = {}} = route;
  const { date } = params;
  console.log('date', date.flag)
  const {flag} = date
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Capital: {date.capital}</Text>
      <Text>Population: {date.population}</Text>
      <Text>latlng: lat {date.latlng[0]} lng {date.latlng[1]}</Text>
      <View style={styles.container}>
        <Image
          style={styles.flag}
          source={{
            uri: flag
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  flag: {
    width: 66,
    height: 58,
  },
});
