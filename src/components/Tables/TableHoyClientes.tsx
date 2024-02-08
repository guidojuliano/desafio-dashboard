import React from 'react';
import { CircularProgress, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useData from '../../hooks/useData';

const TableHoyClientes = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }

  //00:00 - 04:00
  const dataColumn10004 =
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['01:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['02:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['03:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['04:00'];
  const dataColumn20004 =
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['01:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['02:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['03:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['04:00'];
  const dataColumn30004 = data?.grafico?.clientes?.clientesTotales;
  const dataTotal0004 = dataColumn10004 + dataColumn20004 + dataColumn30004;

  //04:00 - 08:00
  const dataColumn10408 =
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['05:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['06:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['07:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['08:00'];
  const dataColumn20408 =
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['05:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['06:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['07:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['08:00'];
  const dataColumn30408 = data?.grafico?.clientes?.clientesTotales;
  const dataTotal0408 = dataColumn10408 + dataColumn20408 + dataColumn30408;

  //08:00 - 12:00
  const dataColumn10812 =
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['09:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['10:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['11:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['12:00'];
  const dataColumn20812 =
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['09:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['10:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['11:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['12:00'];
  const dataColumn30812 = data?.grafico?.clientes?.clientesTotales;
  const dataTotal0812 = dataColumn10812 + dataColumn20812 + dataColumn30812;

  //12:00 - 16:00
  const dataColumn11216 =
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['13:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['14:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['15:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['16:00'];
  const dataColumn21216 =
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['13:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['14:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['15:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['16:00'];
  const dataColumn31216 = data?.grafico?.clientes?.clientesTotales;
  const dataTotal1216 = dataColumn11216 + dataColumn21216 + dataColumn31216;

  //16:00 - 20:00
  const dataColumn11620 =
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['17:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['18:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['19:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['20:00'];
  const dataColumn21620 =
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['17:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['18:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['19:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['20:00'];
  const dataColumn31620 = data?.grafico?.clientes?.clientesTotales;
  const dataTotal1620 = dataColumn11620 + dataColumn21620 + dataColumn31620;

  //20:00 - 00:00
  const dataColumn12000 =
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['21:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['22:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['23:00'] +
    data?.grafico?.clientes?.clientesNuevos?.filtrado?.hoy['00:00'];
  const dataColumn22000 =
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['21:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['22:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['23:00'] +
    data?.grafico?.clientes?.clientesCompraron?.filtrado?.hoy['00:00'];
  const dataColumn32000 = data?.grafico?.clientes?.clientesTotales;
  const dataTotal2000 = dataColumn12000 + dataColumn22000 + dataColumn32000;

  //TOTALES
  const dataColumn1Total = dataColumn10004 + dataColumn10408 + dataColumn10812 + dataColumn11216 + dataColumn11620 + dataColumn12000;
  const dataColumn2Total = dataColumn20004 + dataColumn20408 + dataColumn20812 + dataColumn21216 + dataColumn21620 + dataColumn22000;
  const dataColumn3Total = dataColumn30004 + dataColumn30408 + dataColumn30812 + dataColumn31216 + dataColumn31620 + dataColumn32000;
  const dataTotalTotal = dataTotal0004 + dataTotal0408 + dataTotal0812 + dataTotal1216 + dataTotal1620 + dataTotal2000;

  return (
    <>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'caption'}>HOY</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'body2'}>Horas</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>00:00 - 04:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>04:00 - 08:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>08:00 - 12:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>12:00 - 16:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>16:00 - 20:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>20:00 - 00:00</TableCell>
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
                <Typography variant={'caption'}>Clientes</Typography>
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
              <TableCell align="center">{dataColumn10004}</TableCell>
              <TableCell align="center">{dataColumn20004}</TableCell>
              <TableCell align="center">{dataColumn30004}</TableCell>
              <TableCell align="center">{dataTotal0004}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn10408}</TableCell>
              <TableCell align="center">{dataColumn20408}</TableCell>
              <TableCell align="center">{dataColumn30408}</TableCell>
              <TableCell align="center">{dataTotal0408}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn10812}</TableCell>
              <TableCell align="center">{dataColumn20812}</TableCell>
              <TableCell align="center">{dataColumn30812}</TableCell>
              <TableCell align="center">{dataTotal0812}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn11216}</TableCell>
              <TableCell align="center">{dataColumn21216}</TableCell>
              <TableCell align="center">{dataColumn31216}</TableCell>
              <TableCell align="center">{dataTotal1216}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn11620}</TableCell>
              <TableCell align="center">{dataColumn21620}</TableCell>
              <TableCell align="center">{dataColumn31620}</TableCell>
              <TableCell align="center">{dataTotal1620}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">{dataColumn12000}</TableCell>
              <TableCell align="center">{dataColumn22000}</TableCell>
              <TableCell align="center">{dataColumn32000}</TableCell>
              <TableCell align="center">{dataTotal2000}</TableCell>
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

export default TableHoyClientes;
