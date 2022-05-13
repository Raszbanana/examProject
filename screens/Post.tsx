import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Post = ({ id, title, text }:
    {id: number,  title: string, text: string}) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text style={styles.id}>{id}</Text>
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
    },
    id: {
     display: 'none',
    },
})

export default Post;