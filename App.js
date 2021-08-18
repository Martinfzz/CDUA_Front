import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from "react-redux";
import store from "./src/store/store";
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import Registration from "./src/pages/Registration"
import Session from "./src/pages/Session"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={Home} />
        <Drawer.Screen name="Profil" >
        {() => (
        <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Inscription" component={Registration} />
          <Stack.Screen name="Connexion" component={Session} />
        </Stack.Navigator>
        )}
        </Drawer.Screen>

      </Drawer.Navigator>
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
