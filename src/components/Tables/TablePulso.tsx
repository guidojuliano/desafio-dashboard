import React from 'react';
import { CircularProgress, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useData from '../../hooks/useData';

const TablePulso = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }

  // SEPTIEMBRE
  const dataColumn1Septiembre = data.pulsoGrafico.dia01.septiembre;
  const dataColumn2Septiembre = data.pulsoGrafico.dia10.septiembre;
  const dataColumn3Septiembre = data.pulsoGrafico.dia20.septiembre;
  const dataTotalSeptiembre = dataColumn1Septiembre + dataColumn2Septiembre + dataColumn3Septiembre;

  // OCTUBRE
  const dataColumn1Octubre = data.pulsoGrafico.dia01.octubre;
  const dataColumn2Octubre = data.pulsoGrafico.dia10.octubre;
  const dataColumn3Octubre = data.pulsoGrafico.dia20.octubre;
  const dataTotalOctubre = dataColumn1Octubre + dataColumn2Octubre + dataColumn3Octubre;

  // NOVIEMBRE
  const dataColumn1Noviembre = data.pulsoGrafico.dia01.noviembre;
  const dataColumn2Noviembre = data.pulsoGrafico.dia10.noviembre;
  const dataColumn3Noviembre = data.pulsoGrafico.dia20.noviembre;
  const dataTotalNoviembre = dataColumn1Noviembre + dataColumn2Noviembre + dataColumn3Noviembre;

  // TOTAL
  const dataColumn1Total = dataColumn1Septiembre + dataColumn1Octubre + dataColumn1Noviembre;
  const dataColumn2Total = dataColumn2Septiembre + dataColumn2Octubre + dataColumn2Noviembre;
  const dataColumn3Total = dataColumn3Septiembre + dataColumn3Octubre + dataColumn3Noviembre;
  const dataTotalTotal = dataTotalSeptiembre + dataTotalOctubre + dataTotalNoviembre;

  return (
    <>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'caption'}>Pulso</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'body2'}>Meses</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Septiembre</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Octubre</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Noviembre</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'body2'}>Total</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <Typography variant={'caption'}>Cashback</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'body2'}>Column 1</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={'body2'}>Column 2</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={'body2'}>Column 3</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant={'body2'}>Total</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{dataColumn1Septiembre}</TableCell>
              <TableCell align="center">{dataColumn2Septiembre}</TableCell>
              <TableCell align="center">{dataColumn3Septiembre}</TableCell>
              <TableCell align="center">{dataTotalSeptiembre}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn1Octubre}</TableCell>
              <TableCell align="center">{dataColumn2Octubre}</TableCell>
              <TableCell align="center">{dataColumn3Octubre}</TableCell>
              <TableCell align="center">{dataTotalOctubre}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn1Noviembre}</TableCell>
              <TableCell align="center">{dataColumn2Noviembre}</TableCell>
              <TableCell align="center">{dataColumn3Noviembre}</TableCell>
              <TableCell align="center">{dataTotalNoviembre}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn1Total}</TableCell>
              <TableCell align="center">{dataColumn2Total}</TableCell>
              <TableCell align="center">{dataColumn3Total}</TableCell>
              <TableCell align="center">{dataTotalTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default TablePulso;
