import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import params from '../params';
import {Mine} from './Mine';
import {Flag} from './Flag';

const styles = StyleSheet.create({
  field: {
    height: params.blocksize,
    width: params.blocksize,
    borderWidth: params.borderWidth,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderBottomColor: '#333',
    borderRightColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});

export const Field = ({mined, opened, nearMines, exploded, flag}) => {
  const styledField = [styles.field];

  let color = null;

  if (!opened && !exploded) {
    styledField.push(styles.regular);
  }

  if (opened) {
    styledField.push(styles.opened);
  }

  if (exploded) {
    styledField.push(styles.exploded);
  }

  if (flag) {
    styledField.push(styles.flagged);
  }

  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2a28d7';
    }
    if (nearMines === 2) {
      color = '#2b520f';
    }
    if (nearMines > 2 && nearMines < 6) {
      color = '#f9060a';
    }
    if (nearMines >= 6) {
      color = '#f221a9';
    }
  }

  return (
    <View style={styledField}>
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, {color}]}>{nearMines}</Text>
      )}
      {mined && opened && <Mine />}
      {flag && !opened && <Flag />}
    </View>
  );
};
