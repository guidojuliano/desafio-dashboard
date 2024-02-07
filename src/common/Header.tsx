'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" data-testid="header">
        <Toolbar>
          <Grid container alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={2}></Grid>
            <Grid item container xs={8} justifyContent="center" spacing={2}>
              <Grid item>
                <Button color="secondary" variant="contained" href="/dashboard">
                  Dashboard
                </Button>
              </Grid>

              <Grid item>
                <Button color="secondary" variant="text">
                  Clientes
                </Button>
              </Grid>

              <Grid item>
                <Button color="secondary" variant="text">
                  Reglas de acumulación
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Button
                id="basic-button"
                color="inherit"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Pamela Rojas Gonzalez
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Editar perfil</MenuItem>
                <MenuItem onClick={handleClose}>
                  <LogoutIcon />
                  Cerrar sesión
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
