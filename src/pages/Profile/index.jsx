import React from 'react';
import { StyleSheet, View, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
  <View>
    <Button
      onPress={() => navigation.navigate('Inscription')}
      title="S'inscrire"
      color="#841584"
    />
    <Button
      onPress={() => navigation.navigate('Connexion')}
      title="Se connecter"
      color="red"
    />
  </View>
);
};

const styles = StyleSheet.create({
});


export default Profile;