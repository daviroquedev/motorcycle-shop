import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Search() {
  const [resultTxt, setResult] = useState('Todos!');
  const [inputResult, setInput] = useState('');

  // FUNÇÃO PARA PROCURAR A MOTO E IDENTIFICAR O INPUT DA PESQUISA
  function changeResult() {
    setResult(inputResult);
  }

  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.inputSearch}
          placeholder="Qual moto você quer pesquisar?"
          value={inputResult}
          onChangeText={(texto) => setInput(texto)}
        />

        <TouchableOpacity style={styles.iconSearch} onPress={changeResult}>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.result}>
          Exibindo resultados sobre: {resultTxt}{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputSearch: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    padding: 5,
  },
  iconSearch: {
    backgroundColor: 'white',
    width: '20%',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  searchBar: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    margin: 3,
    width: '100%',
    height: 40,
  },
  result: {
    margin: 5,
    fontSize: 16,
    color: 'white',
  },
});
