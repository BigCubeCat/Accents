import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import React from 'react';

export default function Header() {
  return (
        <AppBar >
          <Toolbar sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
            <Typography variant="h6" color="white" component="div">
              Тренировка ударений
            </Typography>
          </Toolbar>
        </AppBar>
  );
}
