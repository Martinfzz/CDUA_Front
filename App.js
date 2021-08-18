import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import store from "./src/store/store";
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "./src/pages/Registration"
import Session from "./src/pages/Session"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Accueil" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Profil" >
        {() => (
        <Stack.Navigator initialRouteName="Profil">
          <Stack.Screen name="Profil" component={Profile} />

          <Stack.Screen name="Inscription" component={Registration} />
          <Stack.Screen name="Connexion" component={Session} />
        </Stack.Navigator>
        )}
        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
