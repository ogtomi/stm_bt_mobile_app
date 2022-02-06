import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FunctionalScreeen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bigTextView}>
        <Text style={styles.bigText}>AVOID OBSTACLES</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons icon="md-chevron-down-sharp" size={146} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons icon="md-chevron-down-sharp" size={146} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  bigText: {
    color: '#3b5998',
    fontSize: 20,
    fontWeight: 'bold'
  },
  bigTextView: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#add8e6',
    marginTop: 40,
    marginBottom: 100,
  },
});

export default FunctionalScreeen;
