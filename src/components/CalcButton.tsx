import React from 'react';
import { Text, View } from 'react-native';
import { calcButton } from '../styles/calcButton';

interface Props {
  task: string;
  color?: string;
}

export const CalcButton = ({ task, color = '#2D2D2D' }: Props) => {
  return (
    <View
      style={{
        ...calcButton.button,
        backgroundColor: color
      }}
    >
      <Text style={calcButton.buttonLabel}>{task}</Text>
    </View>
  )
}
