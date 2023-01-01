import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DisplayRow = ({label, content}) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}: </Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

export const Quote = props => {
  const {full_name, price, high_day, low_day, variance_last_24h, last_update} =
    props.cryptoData;
  return (
    <View style={styles.container}>
      <Text style={styles.priceText}>{price}</Text>
      <DisplayRow label="Crypto" content={full_name} />
      <DisplayRow label="Highest price of day" content={high_day} />
      <DisplayRow label="Lowest price of the day" content={low_day} />
      <DisplayRow label="Variance last 24 hours" content={variance_last_24h} />
      <DisplayRow label="Last update" content={last_update} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5e49e2',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  priceText: {
    fontSize: 40,
    fontFamily: 'Lato-Black',
    color: '#FFF',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    height: 30,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#FFF',
    marginRight: 10,
  },
  content: {
    fontFamily: 'Lato-Black',
    fontSize: 18,
    color: '#FFF',
  },
});
