import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/user.actions';
import Feed from  '../components/Feed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../typings/navigations';
import { useNavigation } from '@react-navigation/native';

type ScreenNavigationType = NativeStackNavigationProp<
    StackParamList,
    "Post"
>
 
export default function HomeScreen() {

  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenNavigationType>() 
  const renderItem = ({ item }: { item: any}) => (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor="#f8b1f5"
      style={styles.highlighter}
      onPress={() => { navigation.navigate('Post', {
      id: item.id,
      title: item.title, 
      text: item.text,
    })}}>
       <Feed id={item.id} title={item.title} text={item.text}></Feed>
    </TouchableHighlight>    
  );
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          text: `Du ved det`,
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          text: "textText2"
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          text: "textText3"
        },
        {
          id: '53694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Fourth Item',
          text: "textText4"
        },
        {
          id: '53624a0f-3da1-471f-bd96-145571e29d72',
          title: 'Fifth Item',
          text: "textText5"
        },
        {
          id: '53694a1f-3da1-471f-bd96-145571e29d72',
          title: 'Sixth Item',
          text: "textText6"
        }
      ];

    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
            <Button title="Logout" onPress={() => dispatch(logout())} />
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    highlighter: {

      

    }
})