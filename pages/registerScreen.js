import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity, Alert
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');

  async function cadastrar() {
    if (nome == '' || email == '' || senha == '' || confirm == '') {
      alert('Preencha todos os campos');
      return;
    }
    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      confirm: confirm,
    };
    try {
      const dados = await JSON.stringify(usuario);
      await AsyncStorage.setItem(email, dados);
      Register.navigation.reset({
        index: 0,
        routes: [{ name: 'Home', params: { email: email } }],
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.txtInput}> nome </Text>
        <TextInput
          style={styles.inputDados}
          placeholder="Digite seu nome completo..."
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <Text style={styles.txtInput}> email </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputDados}
          placeholder="Digite seu melhor email..."
         />

        <Text style={styles.txtInput}> senha </Text>
        <TextInput
          style={styles.inputDados}
          secureTextEntry={true}
          placeholder="Digite sua senha..."
          value={senha}
          keyboardType="numeric"
          onChangeText={text => setSenha(text)}
        />

        <Text style={styles.txtInput}> confirmar senha </Text>
        <TextInput
          style={styles.inputDados}
          secureTextEntry={true}
          placeholder="Confirme sua senha..."
          value={confirm}
          keyboardType="numeric"
          onChangeText = {text => setConfirm(text)}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnTxt}>voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={cadastrar}>
          <Text style={styles.btnTxt}>criar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000B0D',
    flex: 1,
  },
  containerInput: {
    alignItems: 'center',
    backgroundColor: '#000B0D',
  },
  txtInput: {
    color: 'white',
    fontSize: 15,
    textTransform: 'capitalize',
    margin: 10,
  },
  inputDados: {
    width: 250,
    backgroundColor: 'white',
    paddingLeft: 4,
    borderRadius: 3,
  },
  btnContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  btnTxt: {
    backgroundColor: '#A52502',
    fontSize: 15,
    textTransform: 'capitalize',
    margin: 10,
    padding: 10,
    borderRadius: 12,
    color: 'white',
  },
});
