import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { calcButtonStyles } from '../styles/calcButton';
import { CalcButtonProps } from '../interfaces/calcButton.interface';

export const CalcButton = ({ task, color = '#2D2D2D', isZeroButton = false, action }: CalcButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => action(task)}
    >
      <View
        style={{
          ...calcButtonStyles.button,
          backgroundColor: color,
          width: (isZeroButton) ? 180 : 80
        }}
      >
        <Text style={{
          ...calcButtonStyles.buttonLabel,
          color: (color === '#9B9B9B') ? 'black' : 'white'
        }}>
          {task}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
