import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/calculatorTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.currentOperation}>1,5000.00</Text>
      <Text style={styles.prevOperation}>1,5000.00</Text>

      <View>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>1</Text>
        </View>
      </View>
    </View>
  )
}
