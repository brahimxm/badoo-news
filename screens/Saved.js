import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved</Text>
    </View>
  )
}

export default Saved

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