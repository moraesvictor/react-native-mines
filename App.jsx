/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import params from './src/params';
import {createMinedBoard} from './src/useApp';
import {MinedField} from './src/components/MinedField';

function App() {
  const [board, setBoard] = useState([]);

  const minesAmount = () => {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(columns * rows * params.dificultLevel);
  };
  useEffect(() => {
    const currentBoard = createMinedBoard(
      params.getRowsAmount(),
      params.getColumnsAmount(),
      minesAmount(),
    );
    setBoard(currentBoard);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View>
        <MinedField board={board} />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AAA',
  },
  board: {
    alignContent: 'center',
    backgroundColor: '#AAA',
  },
});

export default App;
