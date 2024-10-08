import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const TerceraVista = () => {
  const [buttonColors, setButtonColors] = useState([
    'blue', 'green', 'red', 'purple'
  ]);

  const handleButtonPress = (index) => {
    const newColors = [...buttonColors];
    newColors[index] = newColors[index] === 'gray' ? getOriginalColor(index) : 'gray';
    setButtonColors(newColors);
  };

  const getOriginalColor = (index) => {
    const colors = ['blue', 'green', 'red', 'purple'];
    return colors[index];
  };

  return (
    <View style={styles.view}>
      {buttonColors.map((color, index) => (
        <View key={index} style={{ margin: 10 }}>
          <Button 
            title={`Botón ${index + 1}`} 
            onPress={() => handleButtonPress(index)} 
            color={color}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TerceraVista;
