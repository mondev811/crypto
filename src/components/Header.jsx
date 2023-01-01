import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const Header = () => {
  return (
    <View>
      <Text style={styles.heading}>Cryptocurrencies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5e49e2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
  },
});
