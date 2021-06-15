import React from 'react';
import styles from './index.module.scss';
import Badge from '@material-ui/core/Badge';
import { Props } from './index';
import { Avatar } from '@material-ui/core';

const Component = ({
  title,
  imageUri,
  kPICounter,
  projectsCounter,
  status,
}: Props) => (
  <div
    className={`${styles.container} ${
      status ? styles.containerEnabled : styles.containerDisabled
    }`}
  >
    <Avatar src={imageUri} />
    <div className={styles.column}>
      <div className={styles.title}>{title}</div>
      <div className={styles.row}>
        <Badge badgeContent={kPICounter} className={styles.badge} />
        <span>KPI's</span>

        <Badge
          badgeContent={projectsCounter}
          className={`${styles.badge} ${styles.pl8} ${styles.pipe}`}
        />
        <span>Projects</span>
      </div>
    </div>
  </div>
);

export default Component;
