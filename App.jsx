/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import params from './src/params';
import {Field} from './src/components/Field';
import {useApp} from './src/useApp';
import {MinedField} from './src/components/MinedField';

function App() {
  const {createMinedBoard} = useApp();
  const minesAmount = () => {
    const columns = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(columns * rows * params.dificultLevel);
  };

  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(
      createMinedBoard(
        params.getRowsAmount(),
        params.getColumnsAmount,
        minesAmount(),
      ),
    );
  }, [createMinedBoard]);

  console.warn(board);

  return (
    <SafeAreaView style={style.container}>
      {board.length > 0 && <MinedField board={board} />}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
