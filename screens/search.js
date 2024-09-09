import React, { useState, useEffect,useRef, useLayoutEffect }
 from "react"
import { StyleSheet, Animated, Text, View, SafeAreaView, ScrollView, RefreshControl, TouchableOpacity,Image, FlatList, Alert, Dimensions, t } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { ListItem, Avatar } from "@rneui/themed";

const { width, height } = Dimensions.get("window")


export default function SearchScreen({ navigation }){

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: "Search",
      headerTitleAlign: 'center',
      headerTintColor: 'black',
      tabBarIcon: ()=> <Feather name="search" size={24} color="black" />,
      headerStyle: {
        backgroundColor: "#0f0f0f",
      },
      headerTitleStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold"
      },
      headerLeft: ()=> <TouchableOpacity><Ionicons name="menu-outline" size={24} color="white" /></TouchableOpacity>,
      headerRight: ()=> <View></View>,

    })
  },[])

  const [refreshing, setRefreshing] = useState(false);
  const [users, setUsers] = useState([]);

   const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   {
    name: 'Amy Farha',
    subtitle: 'Vice President',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
   ]
   


    const [query, setQuery] = useState('');

     const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', query);
  };

   const onRefresh = ()=>{
    setRefreshing(true);
    fetch('https://randomuser.me/api/?results=5')
    .then(res => {
       return res.json()
    })
    .then((res) => {
      setUsers(res.results);
      setRefreshing(false);
    })
  };

    const [inputWidth] = useState(new Animated.Value(200));

  const expandInput = () => {
    Animated.timing(inputWidth, {
      toValue: 250,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const shrinkInput = () => {
    Animated.timing(inputWidth, {
      toValue: 200,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={{ borderRadius: 10 }}>
  <ListItem bottomDivider  >
    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>
    <ListItem.Content>
      <ListItem.Title style={{ fontWeight: "bold" }}>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
  </TouchableOpacity>
)
}


  return (
    <SafeAreaView>

     <TouchableOpacity
        onPress={expandInput}
        activeOpacity={0.7}
        style={styles.inputContainer}
      >
        <Animated.View
          style={[styles.animatedInput, { width: inputWidth }]}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={(text) => setQuery(text)}
            value={query}
            onSubmitEditing={handleSearch}
            onFocus={expandInput}
            onBlur={shrinkInput}
            style={{ marginVertical: 20 }}
          />
        </Animated.View>
      </TouchableOpacity>

       <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
 <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={list}
      renderItem={renderItem}
    />
    </ScrollView>
    </SafeAreaView>
  );
};

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
    scrollView: {
    paddingHorizontal: 10,
  },
  userCard: {
    backgroundColor: '#2f3542',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
   inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  animatedInput: {
    borderRadius: 25,
    backgroundColor: '#ECECEC',
    width: 200, // Initial width
  },
})