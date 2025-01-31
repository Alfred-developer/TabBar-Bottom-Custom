import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Routes from './navigation/router';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar  animated={true} style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
