import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native';

import {Home} from '../screens/Home';
import {RegisterTransaction} from '../screens/RegisterTransaction';


const {Navigator,Screen} = createBottomTabNavigator();

export function RoutesPrivadas(){
  const theme = useTheme();
  
  return (
    
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#aeaeb3',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 20,fontWeight:'700'},
        tabBarStyle: {backgroundColor: theme.colors.secondary},
        headerShown:false,
        }}
        initialRouteName="Home"
    >
      
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({size, color}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      
      <Screen
        name="RegisterProduct"
        component={RegisterTransaction}
        options={{
          title: 'Cadastro Transação',
          tabBarIcon: ({size, color}) => (
            <Icon name="add" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
    
  );
}