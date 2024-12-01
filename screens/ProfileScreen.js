// screens/ProfileScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { firebase } from '../firebaseConfig';  // Import firebase configuration

const ProfileScreen = ({ navigation }) => {

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log('User signed out');
      // After signing out, navigate to Login or Welcome screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Sign-out error: ', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to your Profile</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;
