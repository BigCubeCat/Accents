import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import React from 'react';

export default function Header() {
  return (
        <AppBar component='nav'>
          <Toolbar sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
            <Typography variant="h6" color="white">
              Тренировка ударений
            </Typography>
          </Toolbar>
        </AppBar>
  );
}
