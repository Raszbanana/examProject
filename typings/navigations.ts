export type StackParamList = {
  Chats: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Signup: undefined;
  Login: undefined;
  Profile: undefined;
  EditProfile: undefined;
  Post: {
    id: string;
    image: string;
    title: string;
    text: string;
    subtitle: string;
  };
  ChatroomScreen: { id: string };
  Message: [{ text: string }];
  Home: undefined;
  Feed: undefined;
  AddPost: undefined;
};
