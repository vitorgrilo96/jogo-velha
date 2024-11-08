import { Button, StyleSheet, Text, View } from 'react-native';
import { Square } from './Square';
import { Board } from './Board';
import { useState } from 'react';

export default function Game() {
  const [key, setkey] = useState(0);

  const restartGame = () => {
    setkey(key => key + 1);
  }


  return (
    <View style={styles.container}>
      <Board key={key} />
      <Button title="Jogar Novamente" onPress={restartGame} />
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
});