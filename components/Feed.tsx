import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from "../typings/navigations";


const Feed = ({ id, title, text }:
    {id: number,  title: string, text: string}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.id}>{id}</Text>
            <Text>{title}</Text>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        width: 300,
        height: 100,
        marginTop:10,
        marginBottom:10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    id: {
     display: 'none',
    },
})

export default Feed;