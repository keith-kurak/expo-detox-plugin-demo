import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Button } from 'react-native';

export default function App() {
  const [ showText, setShowText ] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text testID="Text1">Detox is looking for this node</Text>
      <Button testID='Button1' onPress={() => setShowText(true)} title="This will show some more text" />
      {showText && <Text testID="Text2">Detox is also looking for this node</Text>}
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
