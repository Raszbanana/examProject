import { Message } from '../../entities/Message';
import { ADD_MESSAGE, FETCH_MESSAGES } from '../actions/messages.action';
interface ReduxState {
  messages: Message[];
}

const initialState: ReduxState = {
  messages: [],
};

interface ReduxAction {
  type: string;
  payload?: boolean | number | string | Message;
}

const messageReducer = (
  state: ReduxState = initialState,
  action: ReduxAction
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
      // state.chatrooms.push(chatroom) // mutating state. Not allowed
      
    case FETCH_MESSAGES:
      // create a new state object with the action.payload assigned to the chatrooms array
      return { ...state, messages: action.payload };

    default:
      return state;
  }
};

export default messageReducer;
