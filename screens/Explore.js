import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0000ff',
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