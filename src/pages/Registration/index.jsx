import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Button } from "react-native";
import { UserManager } from "../../services";


const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPress = (e) => {
    e.preventDefault();
    UserManager.registerUser(email, password);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"

      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Mot de passe"
      />
      <Button
        onPress={handleOnPress}
        title="S'inscrire"
        color="#841584"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});


export default Registration;