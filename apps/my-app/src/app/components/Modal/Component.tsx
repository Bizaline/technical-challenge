import React from 'react';
import styles from './index.module.scss';
import { Modal } from '@material-ui/core';
import { Props } from './index';

const Component = ({ visible, setVisible, children }: Props) => (
  <Modal open={visible} onClose={() => setVisible(false)}>
    <div className={styles.modal}>{children}</div>
  </Modal>
);

export default Component;
