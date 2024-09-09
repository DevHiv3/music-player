import React, { useState, useEffect,useRef, useLayoutEffect }
 from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity,StatusBar, Dimensions, Image, TouchableWithoutFeedback,Keyboard, Platform, KeyboardAvoidingView, TextInput, FlatList } from 'react-native';
import { TextInput as Input, Drawer } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("window")

export default function Player({ navigation }){

    useEffect(() => {
        StatusBar.setBarStyle('light-content', true);
      }, []);


    useLayoutEffect(()=>{
        navigation.setOptions({
          title: "",
          headerTitleAlign: 'center',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: "#222",
          },
          headerTitleStyle: {
            textAlign: 'center',
            color: 'white',
            fontWeight: "bold"
          },
          headerLeft: ()=> <TouchableOpacity></TouchableOpacity>,
          headerRight: ()=> <View></View>,
    
        })
      },[])


    return(
        <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
        <LinearGradient
        colors={['#222', '#222', '#111']}
        style={styles.container}
      >
        <ScrollView>
        <Image
        style={styles.image}
        source={{ uri: "https://unsplash.com/photos/attractive-young-woman-in-swimwear-posing-while-standing-in-the-beach-hut-outdoors-YKpncbw7CUk" }}
        contentFit="cover"
        transition={1000}
      />

        </ScrollView>
        


      </LinearGradient>
      </TouchableWithoutFeedback>
      )

}


const styles = StyleSheet.create({

    mainTheme: {
      display: "flex", 
      flexDirection: "column", 
      alignItems: 'center',
      width: width, 
      height: height, 
      justifyContent: 'center',
      paddingVertical: 10, 
      paddingHorizontal: 10, 
      backgroundColor: "#222"
    },
     container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    height: 300,
    width: '100%',
    backgroundColor: '#FFF',
  },

})