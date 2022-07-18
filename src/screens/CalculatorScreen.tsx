import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/calculatorTheme'

export const CalculatorScreen = () => {

  const [currOperation, setCurrOperation] = useState('0');
  const [prevOperation, setPrevOperation] = useState('100');

  const resetOperation = () => {
    setCurrOperation('0');
  }

  const setUpOperation = (numericButton: string) => {
    setCurrOperation(currOperation + numericButton);
  }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.prevOperation}>{prevOperation}</Text>
      <Text
        style={styles.currentOperation}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {currOperation}
      </Text>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='C' color='#9B9B9B' action={resetOperation} />
        <CalcButton task='+/-' color='#9B9B9B' action={resetOperation} />
        <CalcButton task='del' color='#9B9B9B' action={resetOperation} />
        <CalcButton task='/' color='rbg(255, 174, 0)' action={resetOperation} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='7' action={setUpOperation} />
        <CalcButton task='8' action={setUpOperation} />
        <CalcButton task='9' action={setUpOperation} />
        <CalcButton task='X' color='rbg(255, 174, 0)' action={setUpOperation} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='4' action={setUpOperation} />
        <CalcButton task='5' action={setUpOperation} />
        <CalcButton task='6' action={setUpOperation} />
        <CalcButton task='-' color='rbg(255, 174, 0)' action={setUpOperation} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='0' isZeroButton action={setUpOperation} />
        <CalcButton task='.' action={setUpOperation} />
        <CalcButton task='=' color='rbg(255, 174, 0)' action={setUpOperation} />
      </View>
    </View>
  )
}
