import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { FiltersProps } from './FiltrosDashboard.types';
import EventIcon from '@mui/icons-material/Event';

const FiltersPulso: React.FC<FiltersProps> = ({ onChange, selectedFilter }) => {
  const filters = [
    { label: 'PULSO', value: 'pulso' },
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

      {selectedFilter === 'pulso' && (
        <Grid item container spacing={3} style={{ paddingTop: 20 }}>
          <Grid item>
            <Button disableElevation variant="contained" color="inherit">
              Todos
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Sep
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Oct
            </Button>
          </Grid>
          <Grid item>
            <Button disableElevation variant="text" color="inherit">
              Nov
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default FiltersPulso;
