import Component from './Component';

export type Props = {
  value: number;
  children: React.ReactNode;
  onChange: (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => void;
};

export default Component;
