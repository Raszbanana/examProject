import { Chatroom } from "../../entities/Chatroom";
import { Message } from "../../entities/Message";
import { ADD_MESSAGE, FETCH_MESSAGES } from "../actions/messages.actions";
interface ReduxState {
    messages: Message[]
}

const initialState: ReduxState = {
    messages: [],
}

interface ReduxAction {
    type: string,
    payload?: boolean | number | string | Chatroom
}

const messagesReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {
        case ADD_MESSAGE:
           /* for(let chatroom of state.chatrooms){
               if(chatroom.id === action.payload.id){
                   chatroom = action.payload as Chatroom;
               }
           } */
            console.log('action', action.payload)
            console.log('state', state);
            return {...state}
            case FETCH_MESSAGES:
              // create a new state object with the action.payload assigned to the chatrooms array.
              return { ...state, messages: action.payload }

        default:
            return state;
    }
};

export default messagesReducer;