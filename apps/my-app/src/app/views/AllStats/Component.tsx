import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import styles from './index.module.scss';
import { Props } from './index';
import ProgrammerCardList from '../../components/ProgrammerCardList';

const Component = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.header}>
        Goal
      </Typography>
      <ProgrammerCardList
        hasNextPage={false}
        isNextPageLoading={false}
        list={data}
        // TODO: use this to implement pagination eg: fetching from an api next page data
        loadNextPage={() => Promise.resolve(null)}
      />
    </div>
  );
};

export default Component;
