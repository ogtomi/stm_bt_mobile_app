import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {BleManager} from 'react-native-ble-plx';

import DeviceCard from '../../components/DeviceCard';

const manager = new BleManager();
var devices = [];

const SettingsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const scanDevices = () => {
    setIsLoading(true);

    manager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.warn(error);
      }
      if (scannedDevice && !devices.find((dev) => dev.id === scannedDevice.id)) {
        console.log(scannedDevice)
        devices = [
          ...devices,
          {id: scannedDevice.id, name: scannedDevice.name},
        ];
      }
    });

    setTimeout(() => {
      manager.stopDeviceScan();
      setIsLoading(false);
    }, 5000);
  };

  return (
    <View>
      <Button title="Scan bluetooth devices" onPress={scanDevices} />
      {devices.map((device) => <DeviceCard device={device} />)}
    </View>
  );
};

const styles = StyleSheet.create({
  textBasic: {
    color: 'black',
  },
});

export default SettingsScreen;
