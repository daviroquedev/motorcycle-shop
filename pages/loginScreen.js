import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function LoginMenu({navigation}) {
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>ME2 MOTOS</Text>
      <View>
        <Image
          source={require('../assets/logo/MOTOLOGO.png')}
          resizeMode="stretch"
          style={styles.iconLogo}
        />
      </View>
      <View style={styles.containerLogin}>
        <View>
          <TextInput
            placeholder="Email"
            autoCorrect={false}
            keyboardType="email-adress"
            value={email}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            keyboardType="numeric"
            value={senha}
            style={styles.textInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.btnLogar}>
            <Text style={styles.txtBtnLogar}>logar </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Esqueci a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.btnText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text style={styles.btnText}>Entrar como visitante</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  iconLogo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  textInput: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    width: 200,
    height: 35,
    marginBottom: 10,
    borderRadius: 8,
    color: 'black',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#000B0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 12,
    margin: 2,
    borderRadius: 8,
    width: 130,
    alignItems: 'center',
  },
  btnLogar: {
    padding: 0,
    backgroundColor: '#A52502',
    marginLeft: 10,
    height: 85,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 14,
  },
txtBtnLogar:{
  color:'white',
  textTransform:'uppercase',
  fontWeight:'bold',
  margin: 2,
},
  btnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: '#1C8394',
    textDecorationLine: 'underline',
  },
  containerLogin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#A52502',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
