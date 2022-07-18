import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { globalStyles } from './src/theme/calculatorTheme';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.backGround}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />

      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;