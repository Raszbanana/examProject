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
import { addMessage, fetchMessages} from '../store/actions/messages.action'
import { fetchChatrooms } from '../store/actions/chat.actions';

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
  const mes: Message[] = useSelector(
    (state: any) => (state.message.messages)
  ); 

  const myChar: any = chatrooms.filter((chat) => chat.id === chatroomId);
  const messagesIntheChatroom: any[] = [];

  const myChatroom: Chatroom = myChar[0];


   const messages: Message[] = [];
    mes.forEach((object) =>{
      messages.push({
      messageId: object.messageId,
      userId: object.userId,
      name: object.name,
      status: object.status,
      text: object.text,
      timestamp: object.timestamp,
      isSending: object.isSending,
      })
    })

  useEffect(() => {
    dispatch(fetchChatrooms());
  }, []); 
  
  useEffect(() => {
    dispatch(fetchMessages(myChatroom));
  }, []);


  const today = new Date();


  function getDate() {
  return (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' at '+today.getHours() + ":" + today.getMinutes()).toString();
  }

  function giveIdToMessage(){
    let randomId = '7241330490';
    let idExists = doesIdExist(mes,randomId);
    while(idExists){
      randomId = (Math.floor((Math.random() *10000000000)+1)).toString()
      if(!doesIdExist(mes,randomId)){
        idExists = false;
      }
    }
    return randomId;
    }
  
  function doesIdExist(array: Message[], randomId: string){
    let exists = false;
    array.forEach((element) => {
      if(element.messageId === randomId){
        exists = true;
      }
  })
  return exists;
}



  
  const sendMessage = () => {
    const _message = {
      messageId: giveIdToMessage(),
      userId: user.id,
      name: user.email,
      status: Status.UNREAD,
      text: message,
      timestamp: getDate(),
      isSending: false,
    };
    if(message != ''){
    dispatch(addMessage(chatroomId, _message));
    }
  };

  const renderItem = ({ item }: { item: any }) => (
    <ChatMessage
      name={item.name}
      text={item.text}
      timestamp={item.timestamp}
      id={item.messageId}
      status={item.status}
      isSending={item.isSending}
    ></ChatMessage>
  );

  messages.forEach((msg) => {
    if (msg.userId === user.id) {
      msg.isSending = true;
    }
  });


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{myChatroom.title}</Text>
      { <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.messageId}
      />}
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
