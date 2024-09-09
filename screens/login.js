import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
} from 'react-native';
import { Input } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import RNModal from 'react-native-modal';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerTitleAlign: 'center',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTitleStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      },
      headerLeft: () => <TouchableOpacity></TouchableOpacity>,
      headerRight: () => <View></View>,
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [ email, setEmail ] = useState("")

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <LinearGradient
        colors={['#222', '#222', '#111']}
        style={styles.container}>
        <View>
          {!open ? (
            <Text></Text>
          ) : (
            <View>
              <RNModal
                isVisible={open}
                animationIn="zoomIn"
                animationOut="zoomOut">
                <View style={styles.forgotpassModal}>
                  <Text style={{ fontWeight: 'bold' }}>
                    Forgot your password ?{' '}
                  </Text>
                  <Text style={{ color: 'gray' }}>
                    type your registered email, we will send you a email for
                    verification and you can the reset your password. Your
                    verification session expires after 10 minutes.
                    <Text style={{ color: 'blue' }}> Learn more</Text>
                  </Text>
                  <Input
                    placeholder="email"
                    placeholderTextColor="#808e9b"
                    value={email}
                    style={styles.normalInput}
                    onChangeText={(text) => setEmail(text)}
                  />

                  <TouchableOpacity
                    onPress={() => setOpen(false)}
                    style={styles.forgotpassbtn}>
                    <Text
                      style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 16,
                      }}>
                      cancel
                    </Text>
                  </TouchableOpacity>
                </View>
              </RNModal>
            </View>
          )}
        </View>

        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#808e9b"
          style={styles.input}
          autoCorrect={true}
          autoCapitalize={false}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808e9b"
          style={styles.input}
          secureTextEntry={true}
          textContentType="password"
        />
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="google" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="facebook-square"
              type="font-awesome"
              size={30}
              color="#808e9b"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="apple" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.signUpText, { color: '#B53471' }]}>
              {' Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainTheme: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
    height: height,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#222',
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
  loginText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#808e9b',
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#B33771',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#833471',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808e9b',
    fontSize: 20,
    fontWeight: '500',
  },
  forgotpassModal: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
  },
  forgotpassbtn: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 8,
    height: 'auto',
    width: '25%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 2,
    marginLeft: 10,
  },
});