import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Feed = ({ id, title, text, subtitle }:
    {id: number,  title: string, text: string, subtitle: string}) => {
      let xsBanner = require('../assets/macBackground.jpeg');
    return (
        <View style={styles.container}>
            <Image style={styles.xsBanner} source={xsBanner}></Image>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
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
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red'
  },
  text: {
    marginTop: 10,
  },
  subtitle: {
    color: '#000000',
    marginTop: 5,
    fontSize: 16
  },
  xsBanner: {
    // display: 'flex',
    // position: 'relative',
    height: '20%',
    width: '100%',
  }
});

export default Feed;