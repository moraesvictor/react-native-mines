import {Dimensions} from 'react-native';

const params = {
  borderWidth: 5,
  blocksize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  dificultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blocksize);
  },
  getRowsAmount() {
    const height = Dimensions.get('window').height;
    const boardHeight = height * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blocksize);
  },
};

export default params;
