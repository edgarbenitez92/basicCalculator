import React from 'react';
import { Text, View } from 'react-native';
import { calcButton } from '../styles/calcButton';

interface Props {
  task: string;
  color?: string;
  isZeroButton?: boolean;
}

export const CalcButton = ({ task, color = '#2D2D2D', isZeroButton = false }: Props) => {
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
