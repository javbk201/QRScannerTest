/**
 * Componente que abre el lector de QR
 */

//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import QRCodeScanner  from "react-native-qrcode-scanner";
import { RNCamera } from 'react-native-camera';

// create a component
export const QRScanner = () => {
    /**
     * onSuccess
     * *this function run an action when code read's event is fired
     * @param {event} capture 
     */
    const onSuccess = (capture) => {
        console.log(capture.data);
    }

    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.auto}
          topContent={
            <Text style={styles.centerText}>
                Search a QR codeto try this code
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
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
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'green'
      },
      buttonTouchable: {
        padding: 16
      }
});

