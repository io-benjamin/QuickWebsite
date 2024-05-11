import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { pages, NavigationButtons } from './pages'; // Importing array of page objects and NavigationButtons component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={pages[0].name}>
        {pages.map((page) => (
          <Stack.Screen key={page.name} name={page.name} component={page.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;