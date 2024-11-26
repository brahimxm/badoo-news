import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import Explore from '../screens/Explore';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';

// Bottom Tab Navigator instance
const Tab = createBottomTabNavigator();

// Custom Tab Bar Button
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
    <View style={styles.customButton}>{children}</View>
  </TouchableOpacity>
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Feather
                name="home"
                size={24}
                color={focused ? '#00005c' : '#666'}
              />
              <Text style={{ color: focused ? '#00005c' : '#666' }}>Home</Text>
            </View>
          ),
        }}
      />

<Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="earth"
                size={24}
                color={focused ? '#00005c' : '#666'}
              />
              <Text style={{ color: focused ? '#00005c' : '#666' }}>Explore</Text>
            </View>
          ),
        }}
      />

<Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="bookmark"
                size={24}
                color={focused ? '#00005c' : '#666'}
              />
              <Text style={{ color: focused ? '#00005c' : '#666' }}>Saved</Text>
            </View>
          ),
        }}
      />

<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="user-circle"
                size={24}
                color={focused ? '#00005c' : '#666'}
              />
              <Text style={{ color: focused ? '#00005c' : '#666' }}>Profile</Text>
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    height: 60,
    paddingBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    marginTop: 12

  },
  tabBadge: {
    backgroundColor: 'red', // Badge background color
    color: '#fff', // Badge text color
    fontSize: 12, // Badge text size
    fontWeight: 'bold', // Badge text weight
  },
  customButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#00005c',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
