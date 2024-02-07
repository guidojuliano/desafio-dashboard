import React from 'react';
import { Button, Grid } from '@mui/material';
import { DashboardFiltersProps } from './FiltrosChart.types';
import CheckIcon from '@mui/icons-material/Check';

const DashboardFilters: React.FC<DashboardFiltersProps> = ({ onToggleFilter, selectedFilters }) => {
  const filters = [
    { label: 'Clientes', value: 'clientes' },
    { label: 'Transacciones', value: 'transacciones' },
    { label: 'Dinero', value: 'dinero' },
    { label: 'Cashback', value: 'cashback' },
  ];

  const firstGroup = filters.slice(0, Math.ceil(filters.length / 2));
  const secondGroup = filters.slice(Math.ceil(filters.length / 2));

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item container xs={6} spacing={2} justifyContent="flex-start">
        {firstGroup.map((filter) => (
          <Grid item key={filter.value}>
            <Button onClick={() => onToggleFilter(filter.value)} disableElevation color="inherit" variant={selectedFilters.includes(filter.value) ? 'contained' : 'outlined'}>
              {selectedFilters.includes(filter.value) ? (
                <>
                  <CheckIcon fontSize="small" /> {filter.label}
                </>
              ) : (
                filter.label
              )}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={6} spacing={2} justifyContent="flex-end">
        {secondGroup.map((filter) => (
          <Grid item key={filter.value}>
            <Button onClick={() => onToggleFilter(filter.value)} disableElevation color="inherit" variant={selectedFilters.includes(filter.value) ? 'contained' : 'outlined'}>
              {selectedFilters.includes(filter.value) ? (
                <>
                  <CheckIcon fontSize="small" /> {filter.label}
                </>
              ) : (
                filter.label
              )}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default DashboardFilters;
