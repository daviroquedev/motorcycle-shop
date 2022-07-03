import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

import {motos} from '../dados/dados'

import Headermain from '../components/main/headermain';
import Card_motos from '../components/main/cardmotos';
import Search from '../components/main/search';

export default function App() {


  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Headermain />
          <Search />
          <View style={styles.cardContainer}>
            
            <FlatList
        data={motos}
        renderItem={Card_motos}
            />
            <Card_motos
              moto={motos.CB500.moto}
              modelo={motos.CB500.modelo}
              price={motos.CB500.price}
              state={motos.CB500.state}
              img={motos.CB500.img}
            />

            <Card_motos
              moto={motos.HORNET.moto}
              modelo={motos.HORNET.modelo}
              price={motos.HORNET.price}
              state={motos.HORNET.state}
              img={motos.HORNET.img}
            />
            <Card_motos
              moto={motos.BMW.moto}
              price={motos.BMW.price}
              modelo={motos.BMW.modelo}
              state={motos.BMW.state}
              img={motos.BMW.img}
            />

            <Card_motos
              moto={motos.KAWASAQUI.moto}
              price={motos.KAWASAQUI.price}
              modelo={motos.KAWASAQUI.modelo}
              state={motos.KAWASAQUI.state}
              img={motos.KAWASAQUI.img}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000B0D',
  },
  inputSearch: {
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    margin: 1,
  },
  cardContainer: {
    flexDirection: 'column',
  },
});
