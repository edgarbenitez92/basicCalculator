export interface CalcButtonProps {
  task: string;
  color?: string;
  isZeroButton?: boolean;

  // Functions
  action: (numericButton: string) => void;
}
