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

const Post = ({
  id,
  title,
  text,
}: {
  id: number;
  title: string;
  text: string;
  image: string;
}) => {
  const route = useRoute();
  const test = () => {
    console.log('test');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/macBackground.jpeg')}
        resizeMode='cover'
        style={styles.background}
      >
        <View style={styles.title_box}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.text}>For the first time</Text>
            <Text style={styles.title}>{route.params.title}</Text>
            <Text style={styles.id}>{route.params.id}</Text>
            <Text style={styles.text}>{route.params.text}</Text>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor='red'
              style={styles.button}
              onPress={test}
            >
              <Text>Press me!</Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderColor: '#000',
    // borderWidth: 1,
    // width: "100%",
    // height: 100,
    // marginTop:10,
    // marginBottom:10,
    // alignItems: 'center',
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
    color: 'white',
  },
  background: {
    // alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title_box: {
    // borderWidth: 1,
    // backgroundColor: 'rgba(188, 205, 245, 1)',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
  },
  scroll: {},
});

export default Post;
