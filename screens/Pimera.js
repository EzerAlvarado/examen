import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Importa la imagen local
import ImagenLocal from '../assets/1.png';

const PrimeraVista = () => {
  return (
    <View style={styles.view}>
      <Image source={ImagenLocal} style={styles.image} />
      <Text>Luffy chill</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default PrimeraVista;
