import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const login = ({ navigation, setloggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setloggedIn] = useState(false);

  const handlelogin = () => {
    // Implementasi logika autentikasi di sini
  
    const validUsername = 'Cipung';
    const validPassword = 'Cipung123';
  
    if (username === validUsername && password === validPassword) {
      setloggedIn(true);
    } else {
      alert('Login gagal. Periksa kembali username dan password.');
    }
    navigation.navigate('home');
  };
  
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo_quizzifyf.png')} style={styles.logo} />

      {loggedIn ? (
        <Text style={styles.welcomeText}>Selamat datang, {username}!</Text>
      ) : (
        <>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />

<TouchableOpacity style={styles.loginButton} onPress={handlelogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDE3A7', // Warna latar belakang
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E86AB', // Warna teks
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#F9BF45', // Warna garis input
    borderRadius: 8,
    padding: 8,
    margin: 10,
    width: 200,
    backgroundColor: '#FFF', // Warna latar input
  },
  loginButton: {
    backgroundColor: '#F76C6C', // Warna tombol login
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF', // Warna teks tombol
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
