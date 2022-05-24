import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Feed = ({ id, title, text, image }:
    {id: number,  title: string, text: string, image: string}) => {
      
      let macBanner = require('../assets/macBackground.jpeg');
      let reactBanner = require('../assets/reactLogo.png')
      let keaBanner = require('../assets/kea_logo.jpg')
      let banner = macBanner;

      if(image == '2') {
        banner = reactBanner;
      } else if(image == '1') {
        banner = macBanner;
      } else if (image == '3') {
        banner = keaBanner;
      }

    return (
        <View style={styles.container}>
            <Image style={styles.xsBanner} source={banner}></Image>
            <Text style={styles.id}>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text numberOfLines={3} style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    height: 200,
    maxWidth:'90%',
    marginTop: 10,
    marginLeft: '5%',
    marginBottom: 10,
    alignItems: 'center',
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
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#32305A'
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
    borderRadius: 5,
    height: '20%',
    width: '90%',
  }
});

export default Feed;