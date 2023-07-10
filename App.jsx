import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import params from './src/params';
import {
  cloneBoard,
  createMinedBoard,
  hadExplosion,
  openField,
  showMines,
  wonGame,
} from './src/useApp';
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

  const handleOpenField = (row, column) => {
    const clonedBoard = cloneBoard(board);
    openField(clonedBoard, row, column);
    const lost = hadExplosion(clonedBoard);
    const win = wonGame(clonedBoard);

    if (lost) {
      showMines(clonedBoard);
      Alert.alert('You lose!');
    }
    if (win) {
      Alert.alert('You win!');
    }

    setBoard(clonedBoard);
  };

  return (
    <SafeAreaView style={style.container}>
      <MinedField onOpenField={handleOpenField} board={board} />
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
