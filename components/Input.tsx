import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({
  title,
  inputValue,
  error,
  setText,
}: {
  title: string;
  inputValue: string;
  error: string;
  setText: (i: string) => void;
}) => {
  const [entered, setEntered] = useState(false);

  const handleChangeText = (input: string) => {
    setText(input);
    setEntered(true);
  };

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        value={inputValue}
        style={styles.border}
        onChangeText={handleChangeText}
        onBlur={() => setEntered(true)}
      />
      {inputValue === '' && entered ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  border: {
    marginTop: 20,
    borderRadius: 2,
    borderWidth: 1,
  },
  error: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default Input;
