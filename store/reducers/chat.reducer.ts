import { Chatroom } from '../../entities/Chatroom';
import { ADD_CHATROOM, FETCH_CHATROOMS } from '../actions/chat.actions';
// import { TOGGLE_HAPPY } from "../actions/chat.actions";
interface ReduxState {
  chatrooms: Chatroom[];
}

const initialState: ReduxState = {
  chatrooms: [],
};

interface ReduxAction {
  type: string;
  payload?: boolean | number | string | Chatroom;
}

const chatReducer = (state: ReduxState = initialState, action: ReduxAction) => {
  switch (action.type) {

    case ADD_CHATROOM:
      return { ...state, chatrooms: [...state.chatrooms, action.payload] };
    // state.chatrooms.push(chatroom) // mutating state. Not allowed */

    case FETCH_CHATROOMS:
      // create a new state object with the action.payload assigned to the chatrooms array.
      return { ...state, chatrooms: action.payload };

    default:
      return state;
  }
};

export default chatReducer;
