import Component from './Component';
import { Props as ProgrammerCardProps } from '../ProgrammerCard';

export type Props = {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  list: ProgrammerCardProps[];
  loadNextPage: () => Promise<unknown>;
};

export default Component;
