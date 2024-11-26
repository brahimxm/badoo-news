import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Splash = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timeout = setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }).start(() => {
            navigation.replace('Main');
          });
        }, 3000); // Set delay to 3 seconds (3000 ms)
    
        return () => clearTimeout(timeout);
      }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.logo}>Badoo</Text>
      <StatusBar backgroundColor='#fff'/>
    </Animated.View>
  )
}


export default Splash

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00005C',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
})