import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import styles from './index.module.scss';
import { Props } from './index';

const Component = (props: Props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span /> }}
    className={styles.tabs}
  />
);
export default Component;
