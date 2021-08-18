import React from 'react';
import { StyleSheet, View, Button } from "react-native";
import { UserManager } from "../../../services";

const Logout = ({ navigation }) => {
  const handleOnPress = () => {
    UserManager.logoutUser();
    navigation.navigate('Accueil')
  }

  return(
    <View>
      <Button
        onPress={handleOnPress}
        title="Déconnexion"
        color="#841584"
      />
    </View>
  );
};

export default Logout;
