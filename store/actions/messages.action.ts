import { Chatroom } from '../../entities/Chatroom';
import { Message } from '../../entities/Message';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export const fetchMessages = (chatroom: Chatroom) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;

    const response = await fetch(
      `https://cbs-react-native-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/${chatroom.id}/message.json?auth=` +
        token,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      console.log('Something went wrong' + (await response));
    } else {
      const data = await response.json(); // json to javascript
      let messages: Message[] = [];
      for (const key in data) {
        // create Chatroom objects and push them into the array chatrooms.
        const obj = data[key];
        console.log('obj', obj);
        messages.push(
          new Message(
            obj.name,
            obj.status,
            obj.text,
            obj.timestamp,
            obj.messageId,
            obj.userId,
            obj.isSending
          )
        );
      }
      dispatch({ type: FETCH_MESSAGES, payload: messages });
    }
  };
};

export const addMessage = (chatroomId: string, message: Message) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;
    //delete chatroom.id // for an update, this would remove the id attribute (and value) from the chatroom
    const response = await fetch(
      `https://cbs-react-native-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/${chatroomId}/message.json?auth=` +
        token,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      }
    );

    if (!response.ok) {
      console.log('Something went wrong' + (await response));
    } else {
      const data = await response.json(); // json to javascript
      message.messageId = data.name;
      dispatch({ type: ADD_MESSAGE, payload: message });
    }
  };
};
