import React, { useState, useEffect,useRef, useLayoutEffect }
 from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, TouchableWithoutFeedback,Keyboard, Platform, KeyboardAvoidingView, ActivityIndicator, Image, TextInput, FlatList,  RefreshControl } from 'react-native';
import { TextInput as Input, Drawer } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import Post from '../components/post'
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const { width, height } = Dimensions.get("window")


const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {

  useLayoutEffect(()=>{
    navigation.setOptions({
      title: "INSTAGRAM",
      headerTitleAlign: 'center',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: "#0f0f0f",
      },
      headerTitleStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: "bold"
      },
      headerLeft: ()=> <TouchableOpacity><AntDesign name="instagram" size={24} color="white" /></TouchableOpacity>,

      headerRight: ()=> <View style={{ marginRight: 5, display: "flex", flexDirection: "row" }}>
      <TouchableOpacity>
      <Ionicons name="ios-chatbubbles-sharp" size={24} color="white" style={{ marginRight: 20, }} />
      </TouchableOpacity>
      <TouchableOpacity>
            <Image
              style={{ ...styles.userProfileImage }}
              source={{ uri: currentUser.profile_image }}
            />
          </TouchableOpacity>
          </View>,

    })
  },[])

   const [currentUser] = useState({
    profile_image: 'https://randomuser.me/api/portraits/men/73.jpg',
  });
   const [refreshing, setRefreshing] = useState(false);
   

  const [posts, setPosts ] = useState([
    {
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: 'https://randomuser.me/api/portraits/men/26.jpg',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      name: 'Adam Walker',
      username: 'adam_walker16',
      userProfileImage: 'https://randomuser.me/api/portraits/men/71.jpg',
      postText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      postImage:
        'https://images.pexels.com/photos/4881622/pexels-photo-4881622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: 132,
      comments: 26,
    },
    {
      name: 'Hailey Diaz',
      username: 'hailey192',
      userProfileImage: 'https://randomuser.me/api/portraits/women/73.jpg',
      postText: 'Lorem ipsum 🐶',
      postImage:
        'https://images.pexels.com/photos/2691779/pexels-photo-2691779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      likes: 459,
      comments: 133,
    },
  ]);

 

  function getRandomImage() {
    let max = 100;
    let min = 1;
    let n = Math.floor(Math.random() * (max - min + 1) + min);
    let url = `https://randomuser.me/api/portraits/${
      n % 2 == 0 ? 'men' : 'women'
    }/${n}.jpg`;
    return url;
  }

  const onRefresh = ()=>{
    setRefreshing(true);
    fetch('https://randomuser.me/api/?results=5')
    .then(res => {
       return res.json()
    })
    .then((res) => {
      setRefreshing(false);
    })
  };


  
    return (
        <View style={{ ...styles.container }}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {/* Stories View */}
        <View style={{ ...styles.storiesView }}>
          <View style={styles.storiesViewTitleView}>
            <Text style={{ ...styles.storiesViewTitle }}>Stories</Text>
            <Text style={{ ...styles.showAllText }}>Show all</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              {Array(10)
                .fill(0)
                .map((s) => (
                  <TouchableOpacity style={{ ...styles.storyUserProfile }}>
                    <Image
                      style={styles.storyUserProfileImage}
                      source={{ uri: getRandomImage() }}
                    />
                  </TouchableOpacity>
                ))}
            </View>
          </ScrollView>
        </View>
        {/* Posts View */}
        <View style={styles.postsView}>
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </View>
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
    );
  }

  const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    paddingTop: 40,
  },
  searchBarView: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#3f3f3f',
    marginRight: 10,
    borderRadius: 4,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  storiesView: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  storiesViewTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storiesViewTitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'NSExtraBold',
  },
  showAllText: {
    color: '#c1c1c1',
    fontFamily: 'NSBold',
    fontSize: 18,
  },
  storyUserProfile: {
    marginRight: 20,
    borderColor: '#B53471',
    borderWidth: 2.5,
    borderRadius: 100,
  },
  storyUserProfileImage: { width: 60, height: 60, borderRadius: 100 },
  postsView: { paddingHorizontal: 10, marginTop: 10 },
  postView: {
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    shadowColor: '#1e1e1e',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  postStatsOpacity: {
    backgroundColor: '#222',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  
  })