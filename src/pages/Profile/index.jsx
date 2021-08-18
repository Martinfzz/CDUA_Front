import React from 'react';
import { StyleSheet, View, Button } from "react-native";
import { useSelector } from "react-redux";
import Logout from "../../components/Profile/Logout";

const Profile = ({ navigation }) => {
  const isLogged = useSelector((loginstore) => loginstore.isLogged);

  return (
  <View>
    { !isLogged && <View>
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
    }
    { isLogged && <Logout navigation={navigation} />
    }
  </View>
);
};

const styles = StyleSheet.create({
});


export default Profile;