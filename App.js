import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './login'; // Pastikan path sesuai dengan struktur folder Anda
import home from './home'; // Pastikan path sesuai dengan struktur folder Anda

const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Stack.Screen name="Home" component={home} />
        ) : (
          <Stack.Screen name="Login">
            {(props) => <login {...props} setLoggedIn={setLoggedIn} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
