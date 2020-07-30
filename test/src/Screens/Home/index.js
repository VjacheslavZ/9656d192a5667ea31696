import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
} from 'react-native';

export const SearchCountry = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const getData = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`, )
      .then(res => res.json())
      .then(res => {
        if (res[0]) {
          navigation.navigate('Search Results', {
            date: res[0],
          });
        }
      })
      .catch(err => {
        console.log('err', err)
      })
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
        placeholder='Enter country'
        value={inputValue}
        onChangeText={setInputValue}
      />

      <Button
        title="submit"
        onPress={getData}
        disabled={!Boolean(inputValue)}
      />
    </View>
  );
};
