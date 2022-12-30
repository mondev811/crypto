import {View, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Header, Form, Quote} from './src/components';

const App = () => {
  const [cryptoData, setCryptoData] = useState();

  return (
    <View>
      <Header />
      <Image
        source={require('./assets/img/cryptomonedas.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Form onSubmit={setCryptoData} />
        {cryptoData && <Quote cryptoData={cryptoData} />}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  content: {
    marginHorizontal: '2.5%',
  },
});
