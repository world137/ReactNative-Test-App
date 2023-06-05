import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { TailwindProvider } from 'tailwind-rn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Test from './screens/Test';
import Discover from './screens/Discover';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerTitleAlign: 'center', }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider >
  );
};

export default App;
