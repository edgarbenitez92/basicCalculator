import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/calculatorTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.prevOperation}>1,5000.00</Text>
      <Text style={styles.currentOperation}>1,5000.00</Text>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='C' color='#9B9B9B' />
        <CalcButton task='+/-' color='#9B9B9B' />
        <CalcButton task='del' color='#9B9B9B' />
        <CalcButton task='/' color='rbg(255, 174, 0)' />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='7' />
        <CalcButton task='8' />
        <CalcButton task='9' />
        <CalcButton task='X' color='rbg(255, 174, 0)' />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='4' />
        <CalcButton task='5' />
        <CalcButton task='6' />
        <CalcButton task='-' color='rbg(255, 174, 0)' />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='0' />
        <CalcButton task='.' />
        <CalcButton task='=' color='rbg(255, 174, 0)' />
      </View>
    </View>
  )
}
