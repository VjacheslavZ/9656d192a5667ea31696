import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {SearchCountry} from "./src/Screens/Home";
import {SearchResults} from "./src/Screens/SearchResults";
import {WeatherScreen} from "./src/Screens/Weather";

const App: () => React$Node = () => {
  const Stack = createStackNavigator();

  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <Text>sds</Text>
    //   </SafeAreaView>
    // </>

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
