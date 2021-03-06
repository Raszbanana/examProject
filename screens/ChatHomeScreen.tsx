import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Chatroom } from '../entities/Chatroom';
import { Message } from '../entities/Message';
import { User } from '../entities/User';
import { addChatroom, fetchChatrooms } from '../store/actions/chat.actions';
import { StackParamList } from '../typings/navigations';

type ScreenNavigationType = NativeStackNavigationProp<StackParamList, 'Chats'>;

export default function Screen1() {
  const navigation = useNavigation<ScreenNavigationType>();
  const [title, onChangeTitle] = React.useState('');

  const chatrooms: Chatroom[] = useSelector(
    (state: any) => state.chat.chatrooms
    );

    const user: User= useSelector(
      (state: any) => state.user.loggedInUser
      );

  const dispatch = useDispatch();

  useEffect(() => {
    // only runs dispatch the first time the component renders
    dispatch(fetchChatrooms());
  }, []);

  const handleAddChatroom = () => {
    const messages: Message[] = [];
    const chatroom: Chatroom = new Chatroom(
      title, messages, 'id');
      if(title != ''){
    dispatch(addChatroom(chatroom));
      }
  };
  const renderChatroom = ({ item }: { item: any }) => (
    <TouchableHighlight
      style={styles.highlighter}
      activeOpacity={0.8}
      underlayColor='#DDDDDD'
      onPress={() => {
        navigation.navigate('ChatroomScreen', {
          id: item.id,
        });
      }}
    >
      <Text style={styles.chatTitle}>{item.title}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatrooms}
        renderItem={renderChatroom}
        keyExtractor={(item) => item.id}
      /> 
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder='Chatroom name'
      />
      <Button title='Create chatroom' onPress={handleAddChatroom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: '80%',
    height: 30,
    color: 'black',
    marginTop: 0,
    marginBottom: 30,
    textAlign: 'center',
  },
  chatId: {
    display: 'none',
  },
  highlighter: {
    padding: 10,
  },
  chatTitle: {
    fontSize: 20,
  },
});
