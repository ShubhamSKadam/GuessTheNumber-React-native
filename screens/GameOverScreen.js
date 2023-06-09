import {View, Text, Image, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import React from 'react';

const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/gameover.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View style={styles.button}>
        <PrimaryButton onPress={onStartNewGame} style={styles.button}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 36,
    height: 100,
    width: 400,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '50%',
  },
  summaryText: {
    fontSize: 20,
    padding: 12,
    margin: 20,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
  },
});

export default GameOverScreen;
