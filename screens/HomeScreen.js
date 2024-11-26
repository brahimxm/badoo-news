import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.title}>Badoo</Text>
            <TouchableOpacity style={styles.notification}>
            <Ionicons name='notifications' color={'#0162B6'} size={20}/>
          </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
      <ScrollView horizontal contentContainerStyle={styles.scrollview} showsHorizontalScrollIndicator={false}>
        <Image source={require('../assets/images/1.png')} style={styles.image}/>
        <Image source={require('../assets/images/2.png')} style={styles.image}/>
        <Image source={require('../assets/images/3.png')} style={styles.image}/>
        <Image source={require('../assets/images/4.png')} style={styles.image}/>
        <Image source={require('../assets/images/2.png')} style={styles.image}/>
        <Image source={require('../assets/images/1.png')} style={styles.image}/>
      </ScrollView>
      <Text style={styles.sectionTitle}>Popular news</Text>
      <View style={styles.newsCardSections}>
        <Image source={require('../assets/images/Cards.png')} style={styles.cardSection}/>
      </View>

      <Text style={styles.sectionTitle}>Recent</Text>
      <View style={styles.newsCardList}>
      <View style={styles.newsCard}>
        <Image source={require('../assets/images/user.png')} style={styles.image}/>
        <View style={styles.column}>
          <Text style={styles.tag}>Chelsea</Text>
          <Text style={styles.cardTitle}>Haaland Pakai Jersey Baru Timas New... Itu Thailand</Text>
          <Text style={styles.date}>Date Posted: 21 Mar 2024</Text>
        </View>
      </View>

      <View style={styles.newsCard}>
        <Image source={require('../assets/images/user.png')} style={styles.image}/>
        <View style={styles.column}>
          <Text style={styles.tag}>Chelsea</Text>
          <Text style={styles.cardTitle}>Haaland Pakai Jersey Baru Timas New... Itu Thailand</Text>
          <Text style={styles.date}>Date Posted: 21 Mar 2024</Text>
        </View>
      </View>

      <View style={styles.newsCard}>
        <Image source={require('../assets/images/user.png')} style={styles.image}/>
        <View style={styles.column}>
          <Text style={styles.tag}>Chelsea</Text>
          <Text style={styles.cardTitle}>Haaland Pakai Jersey Baru Timas New... Itu Thailand</Text>
          <Text style={styles.date}>Date Posted: 21 Mar 2024</Text>
        </View>
      </View>

      <View style={styles.newsCard}>
        <Image source={require('../assets/images/user.png')} style={styles.image}/>
        <View style={styles.column}>
          <Text style={styles.tag}>Chelsea</Text>
          <Text style={styles.cardTitle}>Haaland Pakai Jersey Baru Timas New... Itu Thailand</Text>
          <Text style={styles.date}>Date Posted: 21 Mar 2024</Text>
        </View>
      </View>
      </View>
    <StatusBar backgroundColor='#fff'/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      fontWeight: '900',
    },
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      paddingTop: 40,
    },
    notification:{
      padding: 5,
      borderRadius: 15,
      backgroundColor: '#9ACEFC'
    },
    image:{
      width: 70,
      height: 70,
      marginHorizontal: 10,
      borderRadius: 10,
      overflow: 'hidden'
    },
    background:{
      
    },
    scrollview:{
      marginBottom: 40,
      marginTop: 20
    },
    cardSection:{
      resizeMode: 'contain',
      width: '95%',
      height: 190,
      marginBottom: 20,
      alignSelf: 'center',
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 10,
    },
    newsCard:{
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center',
    },
    column:{
      flex: 1
    },
    tag:{
      fontSize: 14,
      color: '#0162B6',
      fontWeight: '900'
    },
    cardTitle:{
      fontSize: 16,
      fontWeight: 'bold',
    },
    date:{
      fontSize: 12,
      color: '#666',
    },
    content:{
      marginBottom: 70
    }
  
})