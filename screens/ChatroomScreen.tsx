import { Chatroom, Status } from '../entities/Chatroom';
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native';

const ChatroomScreen = () => {
    const route = useRoute();
    // fetch from database where id = route.params.id
    // Every message in the chat should have a correlating userId 
    // If the id on a message id is not equal to the correlating users own id then the text should be left aligned if not,
    // then the text should be right aligned
    // assign chatroom attributes: title, status, message, timestamp, id,  
    const chatroom = new Chatroom("test", Status.READ, "a test message", new Date());

    return (
        <View style={styles.container}>
            <Text>{chatroom.title}</Text>
            <Text >{chatroom.message}</Text>
            <Text>{chatroom.status}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        width: "100%",
        height: 100,
        marginTop:10,
        marginBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    id: {
     display: 'none',
    },
})

export default ChatroomScreen;