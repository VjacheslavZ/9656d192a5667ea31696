import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchCountry } from "./src/Screens/Home";
import { SearchResults } from "./src/Screens/SearchResults";
import { WeatherScreen } from "./src/Screens/Weather";

const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search Country" component={SearchCountry} />
        <Stack.Screen name="Search Results" component={SearchResults} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
