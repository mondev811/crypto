import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {Dropdown} from './';

export const Form = ({onSubmit}) => {
  const [currency, setCurrency] = useState('');
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [crypto, setCrypto] = useState('');

  useEffect(() => {
    if (currency === '') return;

    const queryAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`;
      try {
        const result = await axios.get(url);
        const cryptos = result.data.Data.map(c => {
          return {
            id: c.CoinInfo.Id,
            name: c.CoinInfo.Name,
            full_name: c.CoinInfo.FullName,
            price: c.DISPLAY[currency].PRICE,
            high_day: c.DISPLAY[currency].HIGHDAY,
            low_day: c.DISPLAY[currency].LOWDAY,
            variance_last_24h: c.DISPLAY[currency].CHANGE24HOUR,
            last_update: c.DISPLAY[currency].LASTUPDATE,
          };
        });

        setCryptocurrencies(cryptos);
      } catch (error) {
        console.log(error);
      }
    };

    queryAPI();
  }, [currency]);

  const currencies = [
    {
      id: 1,
      full_name: 'US Dollar',
      name: 'USD',
    },
    {
      id: 2,
      full_name: 'Mexican Peso',
      name: 'MXN',
    },
    {
      id: 3,
      full_name: 'Euro',
      name: 'EUR',
    },
    {
      id: 4,
      full_name: 'Pound sterling',
      name: 'GBP',
    },
  ];

  return (
    <ScrollView>
      <Dropdown
        title="Currencies"
        selectedValue={currency}
        pickerList={currencies}
        keyField="id"
        labelField="full_name"
        valueField="name"
        onSelect={setCurrency}
      />
      <Dropdown
        title="Cryptocurrencies"
        selectedValue={crypto}
        pickerList={cryptocurrencies}
        keyField="id"
        labelField="full_name"
        valueField="name"
        onSelect={setCrypto}
      />
      <Pressable onPress={() => onSubmit(crypto)}>
        <Text style={styles.btn}>Get Quote</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
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
