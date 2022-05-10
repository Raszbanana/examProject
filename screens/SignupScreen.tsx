import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { rehydrateUser, signup } from '../store/actions/user.actions';

import { StackParamList } from "../typings/navigations";

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Signup"
>

export default function SignupScreen() {
    const navigation = useNavigation<ScreenNavigationType>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <Text>Signup Screen</Text>
            <TextInput value={email} placeholder="email" onChangeText={setEmail} />
            <TextInput value={password} placeholder="password" onChangeText={setPassword} />
            <Button title="Signup" onPress={() => dispatch(signup(email, password))} />
            <Text  style={styles.login_text}>Do you already have an account? Log in !</Text>
            <Button title="Go to login page" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    login_text: {
        marginTop: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})