import { Chatroom } from '../entities/Chatroom';
import { useRoute } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../typings/navigations';
import { Message, Status } from '../entities/Message';
import React from 'react';
import ChatMessage from '../components/ChatMessage';

type ScreenNavigationType = NativeStackNavigationProp<
  StackParamList,
  'Message'
>;

const ChatroomScreen = () => {
  const route = useRoute();
  // fetch from database where id = route.params.id
  // Every message in the chat should have a correlating userId
  // If the id on a message id is not equal to the correlating users own id then the text should be left aligned if not,
  // then the text should be right aligned
  // assign chatroom attributes: title, status, message, timestamp, id,

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
  const DATA: Message[] = [
    {
      id: '1101',
      name: 'Paweł',
      status: Status.READ,
      text: 'hola',
      timestamp: 11,
      isSending: true,
    },
    {
      id: '1102',
      name: 'Nikoali',
      status: Status.UNREAD,
      text: 'hej',
      timestamp: 10,
      isSending: false,
    },
    {
      id: '1101',
      name: 'Paweł',
      status: Status.READ,
      text: 'I made a chat!',
      timestamp: 11,
      isSending: true,
    },
    {
      id: '1102',
      name: 'Nikoali',
      status: Status.UNREAD,
      text: 'Looks fine af',
      timestamp: 10,
      isSending: false,
    },
    {
      id: '1101',
      name: 'Paweł',
      status: Status.READ,
      text: 'Its hardcoded tho :/',
      timestamp: 11,
      isSending: true,
    },
  ];
  const chatroom = new Chatroom('test', 1, DATA);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chatroom.title}</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
