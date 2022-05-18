import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableHighlight, SafeAreaView, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/user.actions';
import Feed from  '../components/Feed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../typings/navigations';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../entities/Post';
import { addPost, fetchPosts } from '../store/actions/post.actions';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Post"
>
 
export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenNavigationType>() 
  dispatch(fetchPosts());
  
  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, []);

  const posts: Post[] = useSelector(
    (state: any) => state.post.posts
    );

  const handleAddPost = () => { 
    const post: Post = new Post('', 'test', 'test', 'test', 'test,');
    dispatch(addPost(post));
  }

  const renderItem = ({ item }: { item: any}) => (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="#f8b1f5"
      style={styles.highlighter}
      onPress={() => { navigation.navigate('Post', {
      id: item.id,
      image: item.image,
      title: item.title, 
      text: item.text,
      subtitle: item.subtitle,
    })}}>
       <Feed id={item.id} image={item.image} title={item.title} text={item.text} subtitle={item.subtitle} ></Feed>
    </TouchableHighlight>    
  );
    return (
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <Button title='Add a post to the feed' onPress={() => {
        navigation.navigate('AddPost');
      }} />
        <Button title='Logout' onPress={() => dispatch(logout())} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    highlighter: {

    },
    title: {
      borderWidth: 1,
      borderColor: 'red'
    }
})