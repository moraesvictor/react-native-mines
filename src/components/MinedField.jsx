import React from 'react';
import {Field} from './Field';
import {StyleSheet, View} from 'react-native';

export const MinedField = props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return <View key={r}>{columns}</View>;
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
});
