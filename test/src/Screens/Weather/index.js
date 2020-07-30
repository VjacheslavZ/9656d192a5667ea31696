import React  from 'react';

import {
  Text,
  View,
  Image,
} from 'react-native';

export const WeatherScreen = (props) => {
  const { data } = props.route.params;
  const { temperature, weather_icons=[], wind_speed, precip } = data.current;

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Temperature: {temperature}</Text>
        <Text>Wind Speed: {wind_speed}</Text>
        <Text>Precip: {precip}</Text>

        {weather_icons.map(uri => <Image key={uri} source={{uri, width: 32, height: 32}}/>)}
      </View>
    )
}
