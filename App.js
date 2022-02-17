//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { QRScanner } from './src/tools/QRScanner';


// create a component
const App = () => {
  const [show, setShow] = useState(false);

  const handlePress = () => {
    setShow(!show);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>App</Text>
      {
        show ?
        (
          <>
            <QRScanner/>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handlePress}>
                <Text style={styles.buttonText}>  Close Scanner  </Text>
              </TouchableOpacity>
            </View>
          </>

        )
        :
        (
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.buttonText} > Open Scanner  </Text>
            </TouchableOpacity>
          </View> 
        )
      }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  buttonContainer: {
    width: '70%',
    height: '5%',
    backgroundColor: '#2c3ed2',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

//make this component available to the app
export default App;