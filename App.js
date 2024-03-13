import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


import logo from './assets/002-1-react-native.png'
import Props from './src/ex_2';
import Menssagem from './src/components/menssagem';
import Atividade_3 from './src/Atividade 3';
// import Exemplo_3 from './src/ex_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90CAf9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
