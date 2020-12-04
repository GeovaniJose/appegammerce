import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="rgba(3,3,3,0.9)" />
    <View style={{ flex: 1, backgroundColor: 'rgba(3,3,3,0.9)' }} />
  </>
);

export default App;
