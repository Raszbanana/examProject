import { Chatroom } from '../../entities/Chatroom';

export const ADD_CHATROOM = 'ADD_CHATROOM';
export const FETCH_CHATROOMS = 'FETCH_CHATROOMS';

export const fetchChatrooms = () => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;
    const response = await fetch(
      'https://cbs-react-native-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' +
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
      let chatrooms: Chatroom[] = [];
      for (const key in data) {
        // create Chatroom objects and push them into the array chatrooms.
        const obj = data[key];
        chatrooms.push(new Chatroom(obj.title, obj.message, key));
      }

      dispatch({ type: 'FETCH_CHATROOMS', payload: chatrooms });
    }
  };
};

export const addChatroom = (chatroom: Chatroom) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;

    //delete chatroom.id // for an update, this would remove the id attribute (and value) from the chatroom
    const response = await fetch(
      'https://cbs-react-native-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' +
        token,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(chatroom),
      }
    );

    if (!response.ok) {
      console.log('Something went wrong' + (await response));
    } else {
      const data = await response.json(); // json to javascript
      chatroom.id = data.name;
      

      dispatch({ type: ADD_CHATROOM, payload: chatroom });
    }
  };
};
