import { Post } from '../../entities/Post'

export const ADD_POST = 'ADD_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        const response = await fetch(
            'https://cbs-react-native-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            //There was a problem..
            //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
        } else {
            const data = await response.json(); // json to javascript
            let posts: Post[] = []
            for (const key in data) {
                // create Chatroom objects and push them into the array chatrooms.
                const obj = data[key];
                posts.push(new Post(key, obj.title, obj.text, obj.subtitle, obj.image))
            }

            // console.log("data from server", data);
            //chatroom.id = data.name;
            console.log(posts)

            dispatch({ type: FETCH_POSTS, payload: posts })
        }
    };
}

export const addPost = (post: Post) => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        //delete chatroom.id // for an update, this would remove the id attribute (and value) from the chatroom
        const response = await fetch(
            'https://cbs-react-native-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                post
            )
        });
        
        if (!response.ok) {
            //There was a problem..
            //dispatch({type: ADD_CHATROOM_FAILED, payload: 'something'})
        } else {
            const data = await response.json(); // json to javascript
            // post.id = data.name;
            // console.log(post)
            dispatch({ type: ADD_POST, payload: post })
        }
    };
}