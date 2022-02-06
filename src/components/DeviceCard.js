import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {Device} from 'react-native-ble-plx';

const DeviceCard = ({device}) => {
  console.log(device);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.textBasic}>{`Id: ${device.id}`}</Text>
        <Text style={styles.textBasic}>{`Name: ${device.name}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    marginTop: 10,
    marginBottom: 10,
    shadowOpacity: 0.4,
    padding: 2,
    borderRadius: 10,
  },
  textBasic: {
    color: 'black',
  },
});

export default DeviceCard;
