import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { MathematicalOperations } from '../interfaces/mathematicalOperations.interface'
import { styles } from '../theme/calculatorTheme'

export const CalculatorScreen = () => {

  const [operation, setOperation] = useState('0');
  const [recordOperation, setRecordOperation] = useState('0');
  const lastOperationRef = useRef<MathematicalOperations>();

  // Clear and clear functions
  const resetOperation = () => {
    setOperation('0');
    setRecordOperation('0');
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

  // Validations functions
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

  const changeOpByRecordOp = () => {
    if (operation.endsWith('.')) {
      setRecordOperation(operation.slice(0, 1));
    } else {
      setRecordOperation(operation)
    }

    setOperation('0');
  }

  const changeTypeNumber = () => {
    if (operation.includes('-')) {
      setOperation(operation.replace('-', ''));
    } else {
      setOperation('-' + operation);
    }
  }

  // Operations mathematical functions
  const btnSplit = () => {
    changeOpByRecordOp();
    lastOperationRef.current = MathematicalOperations.split;
  }

  const btnMultiply = () => {
    changeOpByRecordOp();
    lastOperationRef.current = MathematicalOperations.multiply;
  }

  const btnSubtract = () => {
    changeOpByRecordOp();
    lastOperationRef.current = MathematicalOperations.subtract;
  }

  const btnSum = () => {
    changeOpByRecordOp();
    lastOperationRef.current = MathematicalOperations.sum;
  }

  // Calc operation function
  const executeCalc = () => {
    const firstNumber = Number(operation);
    const secondNumber = Number(recordOperation);

    if (firstNumber == 0) return;

    switch (lastOperationRef.current) {
      case MathematicalOperations.sum:
        setOperation(`${firstNumber + secondNumber}`);
        break;

      case MathematicalOperations.subtract:
        setOperation(`${secondNumber - firstNumber}`);
        break;

      case MathematicalOperations.multiply:
        setOperation(`${firstNumber * secondNumber}`);
        break;

      case MathematicalOperations.split:
        setOperation(`${secondNumber / firstNumber}`);
        break;
    }

    return setRecordOperation('0');
  }

  return (
    <View style={styles.calculatorContainer}>
      {
        (recordOperation !== '0') &&
        <Text style={styles.prevOperation}>{recordOperation}</Text>
      }
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
        <CalcButton task='/' color='rbg(255, 174, 0)' action={btnSplit} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='7' action={setUpOperation} />
        <CalcButton task='8' action={setUpOperation} />
        <CalcButton task='9' action={setUpOperation} />
        <CalcButton task='X' color='rbg(255, 174, 0)' action={btnMultiply} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='4' action={setUpOperation} />
        <CalcButton task='5' action={setUpOperation} />
        <CalcButton task='6' action={setUpOperation} />
        <CalcButton task='-' color='rbg(255, 174, 0)' action={btnSubtract} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='1' action={setUpOperation} />
        <CalcButton task='2' action={setUpOperation} />
        <CalcButton task='3' action={setUpOperation} />
        <CalcButton task='+' color='rbg(255, 174, 0)' action={btnSum} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='0' isZeroButton action={setUpOperation} />
        <CalcButton task='.' action={setUpOperation} />
        <CalcButton task='=' color='rbg(255, 174, 0)' action={executeCalc} />
      </View>
    </View>
  )
}
