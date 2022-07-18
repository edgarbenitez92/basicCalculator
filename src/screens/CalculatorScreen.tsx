import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/calculatorTheme'

export const CalculatorScreen = () => {

  const [operation, setOperation] = useState('0');
  const [recordOperation, setRecordOperation] = useState('100');

  const resetOperation = () => {
    setOperation('0');
  }

  const setUpOperation = (pressedNumber: string) => {

    // Validation: Only 1 dot
    if (operation.includes('.') && pressedNumber === '.') return;

    // Validation: Start with 0?
    if (operation.startsWith('0') || operation.startsWith('-0')) {

      // Validation: decimal + dot
      if (pressedNumber === '.') {
        setOperation(operation + pressedNumber);

        // Validation: press 0 existing dot
      } else if (pressedNumber === '0' && operation.includes('.')) {
        setOperation(operation + pressedNumber)

        // Validation: is different to zero? has a dot?
      } else if (pressedNumber !== '0' && !operation.includes('.')) {
        setOperation(pressedNumber);

        // Validation: evade 0000000
      } else if (pressedNumber === '0' && !operation.includes('.')) {
        setOperation(operation);
      } else {
        setOperation(operation + pressedNumber);
      }
    } else {
      setOperation(operation + pressedNumber);
    }
  }

  const changeTypeNumber = () => {
    if (operation.includes('-')) {
      setOperation(operation.replace('-', ''));
    } else {
      setOperation('-' + operation);
    }
  }

  const simpleClear = () => {
    let isNegative = '';
    let numberTemp = operation;

    if (operation.includes('-')) {
      isNegative = '-';
      numberTemp = operation.substring(1);
    }

    if (numberTemp.length > 1) {
      setOperation(isNegative + numberTemp.slice(0, -1));
    } else {
      setOperation('0');
    }
  }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.prevOperation}>{recordOperation}</Text>
      <Text
        style={styles.currentOperation}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {operation}
      </Text>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='C' color='#9B9B9B' action={resetOperation} />
        <CalcButton task='+/-' color='#9B9B9B' action={changeTypeNumber} />
        <CalcButton task='del' color='#9B9B9B' action={simpleClear} />
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
