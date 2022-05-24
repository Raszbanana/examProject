import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../App';
import Input from '../components/Input';
import { User } from '../entities/User';

export default function EditProfileScreen() {
  const user: User = useSelector((state: RootState) => state.user.loggedInUser);
  const [textEmail, setTextEmail] = useState(user.email);
  const [studyProgram, setStudyProgram] = useState('');

  const onSave = () => {
    if (textEmail !== '') {
      // save the data to the server
    } else {
      //Show error message
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Email</Text>
      <View style={styles.borders}>
        <Input
          title='Type new email'
          inputValue={textEmail}
          setText={setTextEmail}
          error='Empty'
        />
      </View>
      <Text style={styles.titles}>Study Program</Text>
      <View style={styles.borders}>
        <Input
          title='Choose new program'
          inputValue={studyProgram}
          setText={setStudyProgram}
          error='Empty'
        />
      </View>
      <Button title='Save' onPress={() => onSave()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titles: {
    fontSize: 20,
    marginBottom: 20,
  },
  borders: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'black',
    borderRadius: 10,
    height: 100,
    width: 200,
  },
});
