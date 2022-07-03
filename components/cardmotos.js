import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';


import Imagem from './imagem';

export default function Card_motos(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.moto_images}
        texto="moto"
        source={props.img}
        resizeMode="stretch"
      />


  
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.titleContainer}>
          <Text style={styles.moto_name}>{props.moto}</Text>
          <MaterialCommunityIcons name="menu-open" size={24}  
            style={styles.iconDetails}
          />
        </TouchableOpacity>
  
      
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>modelo: {props.modelo}</Text>
              <Text style={styles.modalText}>valor: {props.price}</Text>
              <Text style={styles.modalText}>km: {props.state}</Text>
              <TouchableOpacity
                style={[styles.buttonCloseModal]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>FECHAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.btnView}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  moto_name: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#A52502',
    marginTop: 2,
  },
  moto_images: {
    width: 300,
    height: 200,
    borderRadius: 20,
  },
  iconDetails: {
    marginTop: 5,
    marginLeft: 5,
    color:"#154B52",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonCloseModal: {
    backgroundColor: '#A52502',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    marginBottom: 16,
    marginTop: 0,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 19,
    color: 'black',
    borderBottom: 'solid',
    textTransform: 'uppercase',
    borderBottomWidth: 0.5,
  },
  btnView: {
    marginBottom: 15,
  },
});
