import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Feed = ({ id, title, text }:
    {id: number,  title: string, text: string}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 30,
    padding: 10,
    height: 200,
    maxWidth:'90%',
    marginTop: 10,
    marginLeft: '5%',
    marginBottom: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },

  id: {
    display: 'none',
  },
  title: {
    color: 'red'
  },
  text: {

  }
});

export default Feed;