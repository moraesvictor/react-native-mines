const createBoard = (rows, columns) => {
  return Array(rows)
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

const spreadMine = (board, mines) => {
  const rows = board.length;
  const columns = board[0].length;
  let plantedMines = 0;

  while (plantedMines < mines) {
    const selectedRow = parseInt(Math.random() * rows, 10);
    const selectedColumn = parseInt(Math.random() * columns, 10);

    if (!board[selectedRow][selectedColumn].mined) {
      board[selectedRow][selectedColumn].mined = true;
      plantedMines++;
    }
  }
};

export const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMine(board, minesAmount);
  console.warn(board);
  return board;
};
