import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00005C',
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

