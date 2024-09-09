import React, { useState, useEffect,useRef, useLayoutEffect }
 from "react"
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/home"
import SearchScreen from "./screens/search"

const Tab = createBottomTabNavigator();

export default function MainScreen(){


  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};