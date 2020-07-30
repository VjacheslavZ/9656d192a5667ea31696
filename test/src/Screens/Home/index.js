import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableNativeFeedback
} from 'react-native';

export const SearchCountry = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getData = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`, )
      .then(res => res.json())
      // .then(res => setSearchResults(res))
      // .then(res => retsetSearchResults(res))
      .then(res => {
        if (res[0]) {
          navigation.navigate('Search Results', {
            date: res[0],
            otherParam: '',
          });
        }
      })
      .catch(err => {
        console.log('err', err)
      })
  }
  console.log('searchResults', searchResults)
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

      <ScrollView>
        {!!searchResults.length && searchResults.map(({name, numericCode}) =>
          <Text key={numericCode}>{name}</Text>)
        }
      </ScrollView>

    </View>
  );
}
