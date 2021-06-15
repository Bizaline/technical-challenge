import Component from './Component';

export type Props = {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  children: React.ReactNode;
};

export default Component;
