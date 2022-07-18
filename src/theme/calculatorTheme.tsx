import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: 'black'
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  currentOperation: {
    color: 'white',
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'right'
  },
  prevOperation: {
    color: 'rgba(255, 255,255, 0.5)',
    fontSize: 30,
    textAlign: 'right'
  },
  rowButtons: {
    flexDirection: 'row',
    marginBottom: 18,
    paddingHorizontal: 10
  }
});