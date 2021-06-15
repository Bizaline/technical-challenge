import Component from './Component';

export type Props = {
  name: string;
  value: string;
  setValue: (arg: string) => void;
  rightIcon?: React.ReactNode;
};

export default Component;
