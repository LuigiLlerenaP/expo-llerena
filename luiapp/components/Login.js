import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Lógica de autenticación básica: Verifica si el usuario y la contraseña son correctos
    if (username === 'usuario' && password === 'contraseña') {
      setIsLoggedIn(true);
      // Aquí puedes redirigir a otra pantalla o realizar alguna acción después del inicio de sesión exitoso
    } else {
      // Manejar el caso en el que el inicio de sesión falla
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          <Text>Bienvenido, {username}!</Text>
          {/* Aquí puedes mostrar el contenido después del inicio de sesión */}
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nombre de Usuario"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
  },
});

export default Login;
