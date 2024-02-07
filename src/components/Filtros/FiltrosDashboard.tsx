import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FiltersProps } from './FiltrosDashboard.types';
import EventIcon from '@mui/icons-material/Event';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Filters: React.FC<FiltersProps> = ({ onChange, selectedFilter }) => {
  const filters = [
    { label: 'HOY', value: 'today' },
    { label: '7D', value: 'week' },
    { label: 'Este mes', value: 'month' },
    { label: '6M', value: 'sixMonth' },
    { label: 'YTD / YTG', value: 'ytd' },
    { label: '1A', value: 'year' },
    { label: 'MÁX', value: 'max' },
    { label: 'Personalizado', value: 'custom' },
  ];

  return (
    <>
      {filters.map((filter) => (
        <>
          <Grid item>
            <Button disableElevation key={filter.value} variant={selectedFilter === filter.value ? 'contained' : 'text'} color="inherit" onClick={() => onChange(filter.value)}>
              {filter.label === 'Personalizado' ? (
                <>
                  <EventIcon color="secondary" /> {filter.label}
                </>
              ) : (
                filter.label
              )}
            </Button>
          </Grid>
        </>
      ))}

      {selectedFilter === 'week' && (
        <Grid item container spacing={3} style={{ paddingTop: 20 }}>
          <Grid item>
            <Button disableElevation variant="contained" color="inherit">
              Todo
            </Button>
          </Grid>

          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Lunes
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Martes
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Miercoles
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Jueves
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Viernes
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Sabado
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Domingo
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Filters;
