import { Post } from '../../entities/Post';
import { ADD_POST, FETCH_POSTS } from '../actions/post.actions';

interface ReduxState {
  posts: Post[];
}

const initialState: ReduxState = {
  posts: [],
};

interface ReduxAction {
  type: string;
  payload?: boolean | number | string | Post;
}

const postReducer = (state: ReduxState = initialState, action: ReduxAction) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state };

    case FETCH_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};

export default postReducer;
