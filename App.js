import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SampleList from './components/SampleList';
import Cards from './components/Cards';

export default function App() {
  return (
    <View style={styles.container}>
      <Cards />
      <SampleList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
