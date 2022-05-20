import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Status } from '../entities/Message';

const ChatMessage = ({
  name,
  text,
  timestamp,
  id,
  status,
  isSending
}: {
  name: string;
  text: string;
  timestamp: number;
  id: string;
  status: Status;
  isSending: boolean,
}) => {
  return (
      <View style={[(isSending) ? styles.container__sending : styles.container__receiving, styles.container]}>
      <Text style={styles.id}>{id}</Text>
      <Text style={styles.message__info}>{name}</Text>
      <View style={[(isSending) ? styles.sending : styles.receiving, styles.message]}>
      <Text>{text}</Text>
      </View>
      <Text style={styles.message__info}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  container__receiving: {
    marginRight: '40%',
  },
  container__sending: {
    marginLeft: '40%',
  },

  sending: {
    backgroundColor: '#3CB371',
  },
  receiving: {
    backgroundColor: '#C0C0C0',
  },
  message: {
    borderColor: '#000',
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  id: {
    display: 'none',
  },
  message__info: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default ChatMessage;
