import React from 'react';
import { Text, View } from 'react-native';
import { calcButton } from '../styles/calcButton';
import { CalcButtonProps } from '../interfaces/calcButton.interface';

export const CalcButton = ({ task, color = '#2D2D2D', isZeroButton = false }: CalcButtonProps) => {
  return (
    <View
      style={{
        ...calcButton.button,
        backgroundColor: color,
        width: (isZeroButton) ? 100 : 80
      }}
    >
      <Text style={{
        ...calcButton.buttonLabel,
        color: (color === '#9B9B9B') ? 'black' : 'white'
      }}>
        {task}
      </Text>
    </View>
  )
}
