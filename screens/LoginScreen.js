// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
  },
  text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  }
})