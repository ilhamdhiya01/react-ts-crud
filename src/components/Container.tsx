import React from 'react';
import { Box } from '@mui/material';
import { ContainerProps } from '.';

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Box className='min-h-screen w-full px-10 border-x'>{children}</Box>;
};
