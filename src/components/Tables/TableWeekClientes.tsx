import React from 'react';
import { CircularProgress, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useData from '../../hooks/useData';

const TableWeekClientes = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }
  //LUNES
  const dataColumn1Lunes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.lunes;
  const dataColumn2Lunes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.lunes;
  const dataColumn3Lunes = data?.grafico?.clientes?.clientesTotales;
  const dataTotalLunes = dataColumn1Lunes + dataColumn2Lunes + dataColumn3Lunes;
  //MARTES
  const dataColumn1Martes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.martes;
  const dataColumn2Martes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.martes;
  const dataColumn3Martes = data?.grafico?.clientes?.clientesTotales + dataTotalLunes;
  const dataTotalMartes = dataColumn1Martes + dataColumn2Martes + dataColumn3Martes;
  //MIERCOLES
  const dataColumn1Miercoles = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.miercoles;
  const dataColumn2Miercoles = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.miercoles;
  const dataColumn3Miercoles = data?.grafico?.clientes?.clientesTotales + dataTotalMartes;
  const dataTotalMiercoles = dataColumn1Miercoles + dataColumn2Miercoles + dataColumn3Miercoles;
  //JUEVES
  const dataColumn1Jueves = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.jueves;
  const dataColumn2Jueves = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.jueves;
  const dataColumn3Jueves = data?.grafico?.clientes?.clientesTotales + dataTotalMiercoles;
  const dataTotalJueves = dataColumn1Jueves + dataColumn2Jueves + dataColumn3Jueves;
  //VIERNES
  const dataColumn1Viernes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.viernes;
  const dataColumn2Viernes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.viernes;
  const dataColumn3Viernes = data?.grafico?.clientes?.clientesTotales + dataTotalJueves;
  const dataTotalViernes = dataColumn1Viernes + dataColumn2Viernes + dataColumn3Viernes;
  //SABADO
  const dataColumn1Sabado = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.sabado;
  const dataColumn2Sabado = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.sabado;
  const dataColumn3Sabado = data?.grafico?.clientes?.clientesTotales + dataTotalViernes;
  const dataTotalSabado = dataColumn1Sabado + dataColumn2Sabado + dataColumn3Sabado;
  //DOMINGO
  const dataColumn1Domingo = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.domingo;
  const dataColumn2Domingo = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.domingo;
  const dataColumn3Domingo = data?.grafico?.clientes?.clientesTotales + dataTotalSabado;
  const dataTotalDomingo = dataColumn1Domingo + dataColumn2Domingo + dataColumn3Domingo;
  //TOTALES
  const dataColumn1Total = dataColumn1Lunes + dataColumn1Martes + dataColumn1Miercoles + dataColumn1Jueves + dataColumn1Viernes + dataColumn1Sabado + dataColumn1Domingo;
  const dataColumn2Total = dataColumn2Lunes + dataColumn2Martes + dataColumn2Miercoles + dataColumn2Jueves + dataColumn2Viernes + dataColumn2Sabado + dataColumn2Domingo;
  const dataColumn3Total = dataColumn3Lunes + dataColumn3Martes + dataColumn3Miercoles + dataColumn3Jueves + dataColumn3Viernes + dataColumn3Sabado + dataColumn3Domingo;
  const dataTotalTotal = dataTotalLunes + dataTotalMartes + dataTotalMiercoles + dataTotalJueves + dataTotalViernes + dataTotalSabado + dataTotalDomingo;

  return (
    <>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'caption'}>7 DÍAS</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'body2'}>Semana</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Lunes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Martes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Miercoles</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Jueves</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Viernes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Sabado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Domingo</TableCell>
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
            {/* LUNES */}
            <TableRow>
              <TableCell align="center">{dataColumn1Lunes}</TableCell>
              <TableCell align="center">{dataColumn2Lunes}</TableCell>
              <TableCell align="center">{dataColumn3Lunes}</TableCell>
              <TableCell align="center">{dataTotalLunes}</TableCell>
            </TableRow>
            {/* MARTES */}
            <TableRow>
              <TableCell align="center">{dataColumn1Martes}</TableCell>
              <TableCell align="center">{dataColumn2Martes}</TableCell>
              <TableCell align="center">{dataColumn3Martes}</TableCell>
              <TableCell align="center">{dataTotalMartes}</TableCell>
            </TableRow>
            {/* MIERCOLES */}
            <TableRow>
              <TableCell align="center">{dataColumn1Miercoles}</TableCell>
              <TableCell align="center">{dataColumn2Miercoles}</TableCell>
              <TableCell align="center">{dataColumn3Miercoles}</TableCell>
              <TableCell align="center">{dataTotalMiercoles}</TableCell>
            </TableRow>
            {/* JUEVES */}
            <TableRow>
              <TableCell align="center">{dataColumn1Jueves}</TableCell>
              <TableCell align="center">{dataColumn2Jueves}</TableCell>
              <TableCell align="center">{dataColumn3Jueves}</TableCell>
              <TableCell align="center">{dataTotalJueves}</TableCell>
            </TableRow>
            {/* VIERNES */}
            <TableRow>
              <TableCell align="center">{dataColumn1Viernes}</TableCell>
              <TableCell align="center">{dataColumn2Viernes}</TableCell>
              <TableCell align="center">{dataColumn3Viernes}</TableCell>
              <TableCell align="center">{dataTotalViernes}</TableCell>
            </TableRow>
            {/* SABADO */}
            <TableRow>
              <TableCell align="center">{dataColumn1Sabado}</TableCell>
              <TableCell align="center">{dataColumn2Sabado}</TableCell>
              <TableCell align="center">{dataColumn3Sabado}</TableCell>
              <TableCell align="center">{dataTotalSabado}</TableCell>
            </TableRow>
            {/* DOMINGO */}
            <TableRow>
              <TableCell align="center">{dataColumn1Domingo}</TableCell>
              <TableCell align="center">{dataColumn2Domingo}</TableCell>
              <TableCell align="center">{dataColumn3Domingo}</TableCell>
              <TableCell align="center">{dataTotalDomingo}</TableCell>
            </TableRow>
            {/* TOTAL */}
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

export default TableWeekClientes;
