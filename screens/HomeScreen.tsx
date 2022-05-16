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
      subtitle: item.subtitle
    })}}>
       <Feed id={item.id} title={item.title} text={item.text} subtitle={item.subtitle} img={item.img}></Feed>
    </TouchableHighlight>    
  );
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          img: 'banner1',
          title: 'First Item',
          subtitle: 'Wanna get to know items?',
          text: `Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand v Hans hansen havde en bondegård iar i ar åh, og med den går han var en mand`,
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          img: 'banner2',
          title: 'Second Item',
          text: `This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, `
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          img: 'banner1',
          title: 'Third Item',
          text: `This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, `
        },
        {
          id: '53694a0f-3da1-471f-bd96-145571e29d72',
          img: 'banner2',
          title: 'Fourth Item',
          text: `This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, `
        },
        {
          id: '53624a0f-3da1-471f-bd96-145571e29d72',
          img: 'banner1',
          title: 'Fifth Item',
          text: `This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, `
        },
        {
          id: '53694a1f-3da1-471f-bd96-145571e29d72',
          img: 'banner2',
          title: 'Sixth Item',
          text: `This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, This item is an item, unlike anything you have ever witnessed, `
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