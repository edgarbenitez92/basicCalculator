import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/calculatorTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.prevOperation}>1,5000.00</Text>
      <Text style={styles.currentOperation}>1,5000.00</Text>

      <View style={styles.rowButtons}>
        <CalcButton task='C' color='#9B9B9B' />
        <CalcButton task='+/-' color='#9B9B9B' />
        <CalcButton task='del' color='#9B9B9B' />
        <CalcButton task='/' color='#FF9427' />
      </View>
    </View>
  )
}
