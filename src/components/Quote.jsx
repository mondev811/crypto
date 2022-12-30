import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Quote = ({
  price,
  high_day,
  low_day,
  variance_last_24h,
  last_update,
}) => {
  return (
    <View>
      <Text style={styles.text}>{price}</Text>
      <Text style={styles.text}>{high_day}</Text>
      <Text style={styles.text}>{low_day}</Text>
      <Text style={styles.text}>{variance_last_24h}</Text>
      <Text style={styles.text}>{last_update}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Black',
    backgroundColor: '#5e49e2',
    paddingBottom: 10,
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
  },
});
