import React from 'react'
import { SafeAreaView } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { globalStyles } from './src/theme/calculatorTheme';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.backGround}>
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;