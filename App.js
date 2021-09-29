import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './src/store/configureStore';
import Home from "./src/pages/Home";
import Profile from "./src/pages/Profile";
import Registration from "./src/pages/Registration";
import Session from "./src/pages/Session";
import Lessons from './src/pages/Lessons';
import Lesson from './src/pages/Lesson';
import CreateLesson from './src/pages/Createlesson';
import DictionnarySearch from './src/pages/Dictionnary/DictionnarySearch';

export default function App({ route }) {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Drawer.Screen name="Cours" >
            {() => (
                <Stack.Navigator initialRouteName="Cours" screenOptions={{ headerShown: true }}>
                <Stack.Screen name="Lessons" component={Lessons} />
                <Stack.Screen name="Lesson" component={Lesson} />
                <Stack.Screen name="CreateLesson" component={CreateLesson} />

              </Stack.Navigator>
              )}
              </Drawer.Screen>
              <Drawer.Screen name="Dictionnaire" component={DictionnarySearch} initialParams={{ searchId: "" }} />

          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
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
