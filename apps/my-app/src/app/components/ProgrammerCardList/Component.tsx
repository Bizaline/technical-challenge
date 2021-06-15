import React, { useState } from 'react';
import styles from './index.module.scss';
import { Props } from './index';
import ProgrammerCard from '../ProgrammerCard';
import {
  List,
  InfiniteLoader,
  CellMeasurerCache,
  ListRowProps,
} from 'react-virtualized';

const Component = ({
  hasNextPage,
  isNextPageLoading,
  list,
  loadNextPage,
}: Props) => {
  const [cellMeasurerCache, setCellMeasurerCache] = useState(
    new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 108,
      defaultHeight: 108,
    })
  );

  const rowCount = hasNextPage ? list.length + 1 : list.length;
  const isRowLoaded = ({ index }: { index: number }) =>
    !hasNextPage || index < list.length;
  const rowRenderer = (listRowProps: ListRowProps) => {
    const programmer = list[listRowProps.index];

    const content = !isRowLoaded(listRowProps) ? (
      'Loading...'
    ) : (
      <ProgrammerCard
        title={programmer.title}
        imageUri={programmer.imageUri}
        kPICounter={programmer.kPICounter}
        projectsCounter={programmer.projectsCounter}
        status={programmer.status}
      />
    );
    return (
      <div key={listRowProps.key} style={listRowProps.style}>
        {content}
      </div>
    );
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadNextPage}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <List
          ref={registerChild}
          onRowsRendered={onRowsRendered}
          rowRenderer={(listRowProps: ListRowProps) =>
            rowRenderer(listRowProps)
          }
          height={400}
          rowHeight={cellMeasurerCache.rowHeight}
          rowCount={list.length}
          width={450}
        />
      )}
    </InfiniteLoader>
  );
};

export default Component;
