import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Props } from './index';

const Component = ({ children, index, value }: Props) => {
  return (
    <div
      role="tabpanel"
      hidden={index !== value}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {index === value && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
export default Component;
