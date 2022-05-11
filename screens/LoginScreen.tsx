import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useDispatch } from 'react-redux';
import { StackParamList } from '../typings/navigations';
import { rehydrateUser, login } from '../store/actions/user.actions';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<ScreenNavigationType>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  async function readPersistedUserInfo() {
    const token = await SecureStore.getItemAsync('idToken');
    const userJson = await SecureStore.getItemAsync('user');
    let user = null;
    if (userJson) {
      user = JSON.parse(userJson);
    }
    if (user) {
      // then we have a priv. login
      // restore the signup by updating the redux store based on usre and token.
      dispatch(rehydrateUser(user, token!));
    }
  }

  useEffect(() => {
    readPersistedUserInfo();
  }, []);



  return (
    <View style={styles.container}>
      <Text style={styles.login__text}>Login Screen</Text>
      <TextInput style={styles.input} value={email} placeholder='email'  placeholderTextColor="#000" onChangeText={setEmail} />
      <TextInput style={styles.input}
        value={password}
        placeholder='password'
        onChangeText={setPassword}
        placeholderTextColor="#000" 
      />
      <Button title='Login' onPress={() => dispatch(login(email, password))} />
      <Text style={styles.signup_text}>
        Don't you already have an account? Sign up!
      </Text>
      <Button
        title='Go to signup page'
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150,
  },
  signup_text: {
    marginTop: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  login__text: {
    fontWeight: 'bold',
    marginBottom: 50,
    fontSize: 20,
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: '80%',
    height: 30,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
 
});
