import React from 'react';
import Tab from '@material-ui/core/Tab';
import styles from './index.module.scss';
import Badge from '@material-ui/core/Badge';
import { Props } from './index';

const Component = (props: Props) => (
  <Tab
    disableRipple
    {...props}
    label={
      <div>
        {props.label}
        <Badge badgeContent={props.counter} className={styles.badge} />
      </div>
    }
    className={styles.tab}
  />
);

export default Component;
