import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PrimeraVista from './screens/Pimera';
import SegundaVista from './screens/Segunda';
import TerceraVista from './screens/Tercera';

const App = () => {
  const [currentView, setCurrentView] = useState(1);

  const renderView = () => {
    switch (currentView) {
      case 1:
        return <PrimeraVista />;
      case 2:
        return <SegundaVista />;
      case 3:
        return <TerceraVista />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderView()}
      <View style={styles.navigation}>
        <Button title="Vista 1" onPress={() => setCurrentView(1)} />
        <Button title="Vista 2" onPress={() => setCurrentView(2)} />
        <Button title="Vista 3" onPress={() => setCurrentView(3)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default App;
