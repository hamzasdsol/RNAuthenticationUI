import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {PRIMARY, SECONDARY, TERTIARY} from './ButtonTypes';

const CustomButton = ({onPress, text, type = PRIMARY, bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
    padding: 15,
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },

  text_TERTIARY: {
    color: 'gray',
  },
});

export default CustomButton;
