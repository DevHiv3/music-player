import React, { useState, useEffect,useRef, useLayoutEffect }
 from "react"
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather as Icon, FontAwesome as FAIcon } from '@expo/vector-icons';

export default function Post({ post }) {
    return (
      <View style={styles.postView}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{
                uri: post.userProfileImage,
              }}
            />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text selectable style={{ color: '#fff', fontFamily: 'NSBold', fontSize: 18 }}>
              {post.name}
            </Text>
            <Text selectable
              style={{ color: '#fff', fontFamily: 'NSRegular', fontSize: 16 }}
            >
              {post.username}
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name='more-horizontal' color='#fff' size={28} />
          </TouchableOpacity>
        </View>
        {/* Post Content */}
        <View style={{ marginTop: 10 }}>
          <Text
          selectable
            style={{
              color: '#fafafa',
              fontFamily: 'NSRegular',
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          >
            {post.postText}
          </Text>
          {post.postImage ? (
            <Image
              style={{ width: '100%', height: 300, marginTop: 10 }}
              source={{ uri: post.postImage }}
            />
          ) : null}
        </View>
        {/* Post Stats */}
        <View
          style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 10 }}
        >
          <TouchableOpacity style={styles.postStatsOpacity}>
            <Icon name='heart' color='#fff' size={16} />
            <Text
              style={{
                marginLeft: 6,
                fontFamily: 'NSRegular',
                color: '#fff',
              }}
            >
              {post.likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.postStatsOpacity,
              marginLeft: 10,
            }}
          >
            <Icon name='message-circle' color='#fff' size={16} />
            <Text
              style={{
                marginLeft: 6,
                fontFamily: 'NSRegular',
                color: '#fff',
              }}
            >
              {post.comments}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
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