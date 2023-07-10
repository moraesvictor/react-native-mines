import React from 'react';
import {Field} from './Field';
import {StyleSheet, View} from 'react-native';

export const MinedField = props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} />
      );
    });
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flexDirection: 'row'}} key={r}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});
