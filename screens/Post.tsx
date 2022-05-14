import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native'



const Post = ({ id, title, text }:
    {id: number,  title: string, text: string}) => {
    const route = useRoute();
    return (
        <View style={styles.container}>
            <Text>{route.params.title}</Text>
            <Text style={styles.id}>{route.params.id}</Text>
            <Text>{route.params.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        width: "100%",
        height: 100,
        marginTop:10,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    id: {
     display: 'none',
    },
})

export default Post;