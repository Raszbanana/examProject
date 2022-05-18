import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card } from "@rneui/themed";

const Post = ({
  id,
  title,
  text,
  subtitle,
  image,
}: {
  id: string;
  title: string;
  text: string;
  subtitle: string;
  image: string;
}) => {
  const route = useRoute();
  const test = () => {
    console.log('test');
  };
  let banner = require('../assets/macBackground.jpeg');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/macBackground.jpeg')}
        resizeMode='cover'
        style={styles.background}
      >
        <ScrollView style={styles.scroll}>
          <View style={styles.card}>
            <View style={styles.innerCard}>
              <View style={styles.subHeader_background}>
                <Card.Title>
                  <Text style={styles.subHeader}>A page about {route.params.title}</Text>
                </Card.Title>
              </View>
              <Card.Image style={{ padding: 0 }} source={banner} />
              <View style={styles.mainSection}>
              <Text style={styles.text}>{route.params.text}</Text>
              <Text style={styles.id}>{route.params.id}</Text>
              <TouchableHighlight
                activeOpacity={0.8}
                underlayColor='red'
                style={styles.button}
                onPress={test}
              >
                <Text style={styles.button}>Press me!</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  id: {
    display: 'none',
  },
  title: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  text: {
    color: 'black',
    marginTop: 20,
    marginLeft: '5%',
    marginRight: '5%',
  },
  background: {
    height: '100%',
    width: '100%',
    opacity: 1
  },
  button: {
    color: 'black',
    textAlign: 'center',
    width: 60,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  scroll: {
    backgroundColor: '#00000050'
  },
  card: {
    minHeight: '95%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  innerCard: {
    height: '95%',
    flexDirection: 'column',
  },
  subHeader: {
    color: 'white',
  },
  subHeader_background: {
    backgroundColor: 'black'
  },
  mainSection: {
    width: '100%',
    backgroundColor: 'white',
    minHeight: '80%'
  }
});

export default Post;
