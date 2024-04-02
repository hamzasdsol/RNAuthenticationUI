  import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SignInScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';

function App() {
  return (
    <View style={styles.root} >
      <SignupScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
}
)

export default App;
