import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#2d2c2d',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#ddb52f',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
