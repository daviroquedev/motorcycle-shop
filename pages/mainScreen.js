import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';



import Headermain from '../components/headermain';
import Card_motos from '../components/cardmotos';
import Search from '../components/search';


export default function App() {
  

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
        <Headermain/>
          <Search />
          <View style={styles.cardContainer}>
           
            <Card_motos
              moto="kawasaqui"
              price="R$ 23.990"
              modelo="9dsd9d"
              state="0 KM"
              img={{
                uri: 'https://s2.glbimg.com/QT6ukXRNkwt7u_j0J6Zs2prRMiQ=/0x0:921x691/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/y/4/lDfqbPTBW4RuE8iJbDAw/3ebfveyae5bldcygx5jyo2epzu.jpg',
              }}
            />
            
            <Card_motos
              moto="CB500"
              price="R$ 39.100"
              state="1.200 KM"
              img={{
                uri: 'https://www.autoentusiastas.com.br/ae/wp-content/uploads/2020/01/Honda-CB500f-Branca-Lateral.jpg',
              }}
            />
            
            <Card_motos
              moto="HORNET"
              price="R$ 30.532"
              state="8.000 KM"
              img={{
                uri: 'https://cdn.autopapo.com.br/box/uploads/2021/08/18181631/honda-hornet-600-6.-2007-1604x1200.jpg',
              }}
            />
            <Card_motos
              moto="BMW S1000RR"
              price="R$ 158.500"
              state="0 KM"
              img={{
                uri: 'http://www.minimundi.com.br/cdn/imagens/produtos/det/56351.jpg',
              }}
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
    flexDirection:'column',
  },
});