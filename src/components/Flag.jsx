import React from 'react';
import {StyleSheet, View} from 'react-native';

const style = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagPole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    widht: 6,
    height: 5,
    backgroundColor: '#f22',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    width: 6,
    height: 2,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  base2: {
    position: 'absolute',
    width: 10,
    height: 2,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12,
  },
  flagPoleBigger: {
    position: 'absolute',
    height: 28,
    width: 4,
    backgroundColor: '#222',
    marginLeft: 16,
  },
  flagBigger: {
    position: 'absolute',
    widht: 14,
    height: 10,
    backgroundColor: '#f22',
    marginLeft: 3,
  },
  base1Bigger: {
    position: 'absolute',
    width: 12,
    height: 4,
    backgroundColor: '#222',
    marginLeft: 20,
    marginTop: 12,
  },
  base2Bigger: {
    position: 'absolute',
    width: 20,
    height: 4,
    backgroundColor: '#222',
    marginLeft: 8,
    marginTop: 24,
  },
});

export const Flag = ({bigger}) => {
  return (
    <View style={style.container}>
      <View style={[bigger ? style.flagPoleBigger : style.flagPole]} />
      <View style={[bigger ? style.flagBigger : style.flag]} />
      <View style={[bigger ? style.base1Bigger : style.base1]} />
      <View style={[bigger ? style.base2Bigger : style.base2]} />
    </View>
  );
};
