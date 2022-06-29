import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const Imagem = ({texto, img}) => {
  return (
    <>
    <Image style={styles.moto_images} source={img}/>
    </>
  )
}


const styles = StyleSheet.create({
  moto_images:{
    border: 'solid',
    width: 300,
    height: 200,
  },
});

export default Imagem;