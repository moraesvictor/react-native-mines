import {useState} from 'react';

export const useApp = () => {
  const createBoard = (rows, columns) => {
    Array(rows)
      .fill(0)
      .map((_, row) => {
        return Array(columns)
          .fill(0)
          .map((_, column) => {
            return {
              row,
              column,
              flag: false,
              mined: false,
              opened: false,
              exploded: false,
              nearMines: 0,
            };
          });
      });
  };

  const [plantedMines, setPlantedMines] = useState(0);

  const spreadMine = (boarder, mines) => {
    const rows = boarder?.length;
    const columns = boarder[0]?.length;

    while (plantedMines < mines) {
      const selectedRow = parseInt(Math.random() * rows, 10);
      const selectedColumn = parseInt(Math.random() * columns, 10);

      if (!boarder[selectedRow][selectedColumn].mined) {
        boarder[selectedRow][selectedColumn].mined = true;
        setPlantedMines(prev => prev + 1);
      }
    }
  };

  const createMinedBoard = (rows, columns, minesAmount) => {
    const board = createBoard(rows, columns);
    spreadMine(board, minesAmount);
    return board;
  };

  return {createMinedBoard};
};
