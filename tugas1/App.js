import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>Zaki Aljabbar</Text>
      <Text style={styles.nama}>Nama Lengkap : Zaki Aljabbar</Text>
      <Text style={styles.kelas}>Kelas : TI - 21 - KA</Text>
      <Text style={styles.npm}>NPM : 212310001</Text>
      <Text style={styles.lahir}>Tempat, Tanggal Lahir : Bogor, 24 Juli 2002</Text>
      <Text style={styles.bio}>Berikut adalah biodata singkat saya,{"\n"}untuk memenuhi Tugas 1 PPB</Text>

      <Image
        source={require("./assets/prof-pict.png")}
        resizeMode="contain"
        style={styles.image}
      >  
      </Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  username: {
    color: "#121212",
    fontSize: 20,
    marginTop: 253,
    marginLeft: 145
  },

  nama: {
    color: "#121212",
    fontSize: 15,
    marginTop: 47,
    marginLeft: 30
  },

  kelas: {
    color: "#121212",
    fontSize: 15,
    marginLeft: 30
  },

  npm : {
    color: "#121212",
    fontSize: 15,
    marginLeft: 30
  },

  lahir : {
    color: "#121212",
    fontSize: 15,
    marginLeft: 30
  },

  bio : {
    color: "#121212",
    fontSize: 15,
    marginTop: 12,
    marginLeft: 30
  },

  image: {
    width: 100,
    height: 100,
    marginTop: -337,
    marginLeft: 155
  }
});
