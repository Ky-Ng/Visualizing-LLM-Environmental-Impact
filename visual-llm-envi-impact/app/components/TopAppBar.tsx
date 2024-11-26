import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Paper } from '@mui/material';

export interface TopAppBarInterface {
  title: string;
  description: string
}

export default function TopAppBar({ title, description }: TopAppBarInterface) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper elevation={2} className='rounded p-2'>
        <AppBar position="static" className='p-2'>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>
        </AppBar>
      </Paper>
    </Box >
  );
}
