import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import EditProfileScreen from '../screens/EditProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SignupScreen from '../screens/SignupScreen';
import ChatHomeScreen from '../screens/ChatHomeScreen';
import Post from './../screens/Post';
import LoginScreen from './../screens/LoginScreen';
import ChatroomScreen from '../screens/ChatroomScreen';
import AddPost from '../screens/AddPostScreen';
import { StackParamList } from './../typings/navigations';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function ChatStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'purple',
      }}
    >
      <Stack.Screen name='Chats' component={ChatHomeScreen} />
      <Stack.Screen name='ChatroomScreen' component={ChatroomScreen} />
    </Stack.Navigator>
  );
}
function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'purple',
      }}
    >
      <Stack.Screen name='Feed' component={HomeScreen} />
      <Stack.Screen
        name='Post'
        component={Post}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name='AddPost'
        component={AddPost}
        options={{ title: 'Add a post' }}
      />
    </Stack.Navigator>
  );
}

function ProfileStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'purple',
      }}
    >
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen
        name='EditProfile'
        component={EditProfileScreen}
        options={{ title: 'Edit Profile' }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const user = useSelector((state: RootState) => state.user.loggedInUser);

  return (
    <NavigationContainer>
      {/* Move navigation related code to a seperate component that is used here */}
      {/* Determine if the user is logged in and display:
        A stack navigator (only) with signup and login
        Our "normal" app with tabs navigation */}
      {user !== null ? (
        // Show the app with all navigation
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name='Home' component={HomeStackNavigator} />
          <Tab.Screen name='Chat' component={ChatStackNavigator} />
          <Tab.Screen name='Menu' component={ProfileStackNavigator} />
        </Tab.Navigator>
      ) : (
        // show a stack navigator with only signup and login screens.
        <Stack.Navigator>
          <Stack.Screen name='Signup' component={SignupScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
