import React from 'react';
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from "../Registration"
import Session from "../Session"

const Stack = createNativeStackNavigator();

const Profile = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Session" component={Session} />
    </Stack.Navigator>
  </NavigationContainer>
);
};

const styles = StyleSheet.create({
});


export default Profile;