import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>La page home</Text>
      <Button
        onPress={() => navigation.navigate('Registration')}
        title="S'inscrire"
        color="#841584"
      />
      <Button
        onPress={() => navigation.navigate('Session')}
        title="Se connecter"
        color="red"
      />
      <StatusBar style="auto" />
    </View>
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


export default Home;