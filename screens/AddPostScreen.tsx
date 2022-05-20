import React from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView, TextInput, Text, StyleSheet, Button, View } from 'react-native';
import { Card } from "@rneui/themed";
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../entities/Post';
import { addPost } from '../store/actions/post.actions';
import RNPickerSelect from 'react-native-picker-select';

const AddPost = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const [title, onChangeTitle] = React.useState('');
  const [subtitle, onChangeSubtitle] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const [image, onChangeImage] = React.useState('');

  const posts: Post[] = useSelector(
    (state: any) => state.post.posts
    );

  const handleAddPost = () => { 
    const post: Post = new Post('', title, text, subtitle, image);
    console.log(post)
    dispatch(addPost(post));
    onChangeText('')
    onChangeSubtitle('')
    onChangeTitle('')

  }

  return (
    <SafeAreaView style={styles.container}>
      <Card>
      <Text style={styles.headers}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder='The title of your post'
        placeholderTextColor='#8C8A8A'
        maxLength={40}
      />
      <Text style={styles.headers}>Subtitle</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSubtitle}
        value={subtitle}
        placeholder='The subtitle of your post'
        placeholderTextColor='#8C8A8A'
        maxLength={40}
      />
      <Text style={styles.headers}>Text</Text>
      <TextInput
        multiline
        style={[styles.input, styles.text]}
        onChangeText={onChangeText}
        value={text}
        placeholder='The detailed text of your post'
        maxLength={450}
      />
      <View>
        <Text style={[styles.headers, styles.bannerSelect]}>Select a banner for your post</Text>
        <View style={styles.selector}>
      <RNPickerSelect
            onValueChange={(value) => onChangeImage(value)}
            items={[
                { label: 'macLogo', value: '1', color: 'red' },
                { label: 'reactLogo', value: '2',  color: 'blue' }
            ]}
        />
        </View>
      </View>
      <Button 
      title="AddPost" 
      onPress={handleAddPost}>Add Post!</Button>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
    },
    highlighter: {

    },
    input: {
      marginTop: 5,
      borderWidth: 1,
    },
    headers: {
      marginTop: 5,
      textAlign: 'center',
    },
    text: {
      height: '55%',
    },
    selector: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: '46%',
      fontSize: 100,
    },
    bannerSelect: {
      marginTop: 20,
    }
})

export default AddPost