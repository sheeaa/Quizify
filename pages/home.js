// HomePage.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const home = ({ navigation }) => {
  const handleLogout = () => {
    // Tambahkan logika logout atau reset state login di sini
    // Contoh: setLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <Text>Selamat datang di halaman utama!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default home;
