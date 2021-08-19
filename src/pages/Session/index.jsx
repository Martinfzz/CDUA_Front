import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { View, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from "react-native";
import { UserManager } from "../../services";
import { resetErrors } from "../../store";
import {store} from "../../store/configureStore";
import { CommonActions } from '@react-navigation/native';

const Session = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoginSuccess = useSelector((loginstore) => loginstore.user.isLogged);
  const isLoginFailed = useSelector((loginstore) => !!loginstore.user.loginError);

  const handleOnPress = (e) => {
    e.preventDefault();
    UserManager.loginUser(email, password);
  };

  useEffect(() => {
    if (isLoginSuccess) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Profil' },
          ],
        })
      )
    } else if (isLoginFailed) {
      store.dispatch(resetErrors());
    }
  }, [isLoginSuccess, isLoginFailed]);

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
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
            title="Se connecter"
            color="#841584"
          />
        </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
});


export default Session;