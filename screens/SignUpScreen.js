// screens/SignUpScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SignUpScreen;


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