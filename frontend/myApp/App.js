import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

export default function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <View>
        <Text>{message}</Text>
      </View>
      <StatusBar style="auto" />
    </>
    
    
  );
}

