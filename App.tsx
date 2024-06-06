
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useTheme } from '@react-navigation/native';
import HomePage from './src/pages/Home';
import ProfilePage from './src/pages/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import { AppColor } from './src/static/Info';
import Card from './src/pages/Card';


// Tab Navigation
const Tab = createBottomTabNavigator();

const App = () => {


  return (

    <NavigationContainer>
      
      <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: AppColor.background, 
            borderWidth: 0,
            height: 90,
            paddingTop: 10
          }
        }} 
        initialRouteName={'homepage' }
      >

        <Tab.Screen
          name='homepage'
          component={HomePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ()=>
              <View style={{alignItems: 'center', gap: 0}}>
                <Icon name='home-outline' size={24} color={'white'} />
                <Text style={{color: 'white'}}>Home</Text>
              </View>
          }}
        />

        <Tab.Screen
          name='cardpage'
          component={Card}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ()=>
              <View style={{alignItems: 'center', gap: 0}}>
                <Icon name='card-outline' size={24} color={'white'} />
                <Text style={{color: 'white'}}>Card</Text>
              </View>
          }}
        />

        <Tab.Screen
          name='transactionpage'
          component={Card}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ()=>
              <View style={{alignItems: 'center', gap: 0}}>
                <Icon name='swap-horizontal-outline' size={24} color={'white'} />
                <Text style={{color: 'white'}}>Transaction</Text>
              </View>
          }}
        />

        <Tab.Screen
          name='profilepage'
          component={ProfilePage}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ()=>
              <View style={{alignItems: 'center', gap: 0}}>
                <Icon name='person-outline' size={24} color={'white'} />
                <Text style={{color: 'white'}}>Profile</Text>
              </View>
          }}
        />

      </Tab.Navigator>

    </NavigationContainer>

  )

}

export default App

const styles = StyleSheet.create({})