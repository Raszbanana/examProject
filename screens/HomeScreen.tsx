import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/user.actions';
import Feed from '../components/Feed';
 
export default function HomeScreen() {
    const dispatch = useDispatch();
    const renderItem = ({ item }: { item: any}) => (
        <Feed id ={item.id} title={item.title} text={item.text}></Feed>
    );
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          text: "testText"
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
      ];

    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>
            <Text>Home Screen</Text>
            <Button title="Logout" onPress={() => dispatch(logout())} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
})