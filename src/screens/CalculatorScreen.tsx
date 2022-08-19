import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { CalcButton } from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/calculatorTheme';

export const CalculatorScreen = () => {

  const {
    operationState,
    btnOperations,
    cleanClearOperation,
    createOperation
  } = useCalculator();

  let { operation, recordOperation } = operationState;
  let { btnSplit, btnMultiply, btnSubtract, btnSum, changeTypeNumber } = btnOperations;
  let { simpleClear, resetOperation } = cleanClearOperation;
  let { setUpOperation, executeCalc } = createOperation;

  useEffect(() => {
    SplashScreen.hide();
  }, []);


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
        <CalcButton task='/' color='#FF9427' action={btnSplit} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='7' action={setUpOperation} />
        <CalcButton task='8' action={setUpOperation} />
        <CalcButton task='9' action={setUpOperation} />
        <CalcButton task='X' color='#FF9427' action={btnMultiply} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='4' action={setUpOperation} />
        <CalcButton task='5' action={setUpOperation} />
        <CalcButton task='6' action={setUpOperation} />
        <CalcButton task='-' color='#FF9427' action={btnSubtract} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='1' action={setUpOperation} />
        <CalcButton task='2' action={setUpOperation} />
        <CalcButton task='3' action={setUpOperation} />
        <CalcButton task='+' color='#FF9427' action={btnSum} />
      </View>

      {/* Row Buttons */}
      <View style={styles.rowButtons}>
        <CalcButton task='0' isZeroButton={true} action={setUpOperation} />
        <CalcButton task='.' action={setUpOperation} />
        <CalcButton task='=' color='#FF9427' action={executeCalc} />
      </View>
    </View>
  )
}
