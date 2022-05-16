import { Chatroom } from '../entities/Chatroom';
import { useRoute } from '@react-navigation/native';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../typings/navigations';
import { Message, Status } from '../entities/Message';
import React, { useEffect } from 'react';
import ChatMessage from '../components/ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '../entities/User';
import {addMessage, fetchMessages} from '../store/actions/messages.actions'

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  'Message'
>;

const ChatroomScreen = ({ route }: any) => {
  const [message, onChangeMessage] = React.useState('');
  const dispatch = useDispatch();

  const { id } = route.params;
  const chatroomId = JSON.stringify(id).replace(/"/g, '');

  const user: User = useSelector((state: any) => state.user.loggedInUser);
  const chatrooms: Chatroom[] = useSelector(
    (state: any) => (state.chat.chatrooms)
  );
  const listOfMessages: Message[] = useSelector(
    (state: any) => (state.chat.messages)
  );

  console.log(listOfMessages)
 

  const myChar: Chatroom[] = chatrooms.filter((chat) => chat.id === chatroomId);



 /*  useEffect(() => {
    dispatch(fetchMessages(myChar[0]));
  }, []); */

  // fetch from database where id = route.params.id
  // Every message in the chat should have a correlating userId
  // If the id on a message id is not equal to the correlating users own id then the text should be left aligned if not,
  // then the text should be right aligned
  // assign chatroom attributes: title, status, message, timestamp, id,

  const sendMessage = () => {
    const _message = {
      messageId: '1101',
      userId: user.id,
      name: 'Paweł',
      status: Status.UNREAD,
      text: message,
      timestamp: new Date().getUTCDate(),
      isSending: false,
    };

    dispatch(addMessage(myChar[0], _message));
  };

  const renderItem = ({ item }: { item: any }) => (
    <ChatMessage
      name={item.name}
      text={item.text}
      timestamp={item.timestamp}
      id={item.id}
      status={item.status}
      isSending={item.isSending}
    ></ChatMessage>
  );
  const messages: Message[] = [
    {
      messageId: '1101',
      userId: 'vIkp8LuhRBg4JwbEBhWEa5QWVMf1',
      name: 'Paweł',
      status: Status.READ,
      text: 'hola',
      timestamp: new Date().getDate(),
      isSending: false,
    },
    {
      messageId: '1102',
      userId: '2',
      name: 'Nikoali',
      status: Status.UNREAD,
      text: 'hej',
      timestamp: new Date().getDate(),
      isSending: false,
    },
    {
      messageId: '1101',
      userId: 'vIkp8LuhRBg4JwbEBhWEa5QWVMf1',
      name: 'Paweł',
      status: Status.READ,
      text: 'I made a chat!',
      timestamp: new Date().getDate(),
      isSending: false,
    },
    {
      messageId: '1102',
      userId: '2',
      name: 'Nikoali',
      status: Status.UNREAD,
      text: 'Looks fine af',
      timestamp: new Date().getDate(),
      isSending: false,
    },
    {
      messageId: '1101',
      userId: 'vIkp8LuhRBg4JwbEBhWEa5QWVMf1',
      name: 'Paweł',
      status: Status.READ,
      text: 'Its hardcoded tho :/',
      timestamp: new Date().getDate(),
      isSending: false,
    },
  ];

  messages.forEach((msg) => {
    if (msg.userId === user.id) {
      msg.isSending = true;
    }
  });

  const chatroom = new Chatroom('test', messages, 'id');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chatroom.title}</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.messageId}
      />
      <View style={styles.messageInput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMessage}
          value={message}
          placeholder='Write a message'
        />
        <Button title='Send' onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageInput: {
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },

  id: {
    display: 'none',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: '100%',
    height: 30,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default ChatroomScreen;
