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
import { Card } from '@rneui/themed';

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
  let macBanner = require('../assets/macBackground.jpeg');
  let reactBanner = require('../assets/reactLogo.png');
  let keaBanner = require('../assets/kea_logo.jpg');
  let banner = keaBanner;

  if (route.params.image == '2') {
    banner = reactBanner;
  } else if (route.params.image == '1') {
    banner = macBanner;
  } else if (route.params.image == '3') {
    banner = keaBanner;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={banner}
        resizeMode='cover'
        style={styles.background}
      >
        <ScrollView style={styles.scroll}>
          <View style={styles.card}>
            <View style={styles.innerCard}>
              <View style={styles.subHeader_background}>
                <Card.Title>
                  <Text style={styles.subHeader}>{route.params.subtitle}</Text>
                </Card.Title>
              </View>
              <Card.Image style={{ padding: 0 }} source={banner} />
              <View style={styles.mainSection}>
                <Text style={styles.text}>{route.params.text}</Text>
                <Text style={styles.id}>{route.params.id}</Text>
                <View
                  style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                  <TouchableHighlight
                    activeOpacity={0.8}
                    underlayColor='rgb(179, 255, 224)'
                    style={styles.touch}
                    onPress={test}
                  >
                    <Text style={[styles.likeButton, styles.button]}>
                      Like this post
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    activeOpacity={0.8}
                    underlayColor='rgb(255, 179, 179)'
                    style={styles.touch}
                    onPress={test}
                  >
                    <Text style={[styles.dislikeButton, styles.button]}>
                      Dislike this post
                    </Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.likes}>
                  <Text>Likes: 230 </Text>
                  <Text>Dislikes: 493</Text>
                </View>
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
    opacity: 1,
  },
  button: {
    // backgroundColor: '#32305A',
    textAlign: 'center',
    width: 60,
  },
  dislikeButton: {
    color: 'red',
  },
  likeButton: {
    color: 'green',
  },
  scroll: {
    backgroundColor: '#00000050',
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
    justifyContent: 'center',
    backgroundColor: '#32305A',
    height: 60,
  },
  mainSection: {
    width: '100%',
    backgroundColor: 'white',
    minHeight: '50%',
  },
  touch: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    color: 'black',
    textAlign: 'center',
    borderRadius: 10,
  },
  likes: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Post;
