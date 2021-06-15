import React from 'react';
import styles from './index.module.scss';
import InputBase from '@material-ui/core/InputBase';
import { Props } from './index';

const Component = ({ name, value, setValue, rightIcon }: Props) => (
  <div className={styles.search}>
    <InputBase
      name={name}
      placeholder="Search…"
      value={value}
      classes={{
        root: styles.inputRoot,
        input: styles.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
    />
    {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
  </div>
);

export default Component;
