const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return (
        Array(columns)
          .fill(0)
          // eslint-disable-next-line no-shadow
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
          })
      );
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
  return board;
};

export const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return {...field};
    });
  });
};

export const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach(r => {
    columns.forEach(c => {
      const isDiferent = r !== row || c !== column;
      const isValidRow = r >= 0 && r < board.length;
      const isValidColumn = c >= 0 && c < board[0].length;
      if (isDiferent && isValidColumn && isValidRow) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

export const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

export const openField = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n =>
        openField(board, n.row, n.column),
      );
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter(n => n.mined).length;
    }
  }
};

export const fields = board => [].concat(...board);

export const hadExplosion = board =>
  fields(board).filter(field => field.exploded).length > 0;

export const pendding = field =>
  (field.mined && !field.flag) || (!field.opened && !field.mined);

export const wonGame = board => fields(board).filter(pendding) === 0;

export const showMines = board =>
  fields(board)
    .filter(field => field.mined)
    .forEach(f => (f.opened = true));
