import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={setValue}
        style={styles.textinput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 12,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 1,
  },
  textinput: {},
});

export default CustomInput;
