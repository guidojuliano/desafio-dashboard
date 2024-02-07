import React from 'react';
import { CircularProgress, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useData from '../../hooks/useData';

const TableWeekClientesCashback = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }
  //LUNES CLIENTES
  const dataClientesColumn1Lunes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.lunes;
  const dataClientesColumn2Lunes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.lunes;
  const dataClientesColumn3Lunes = data?.grafico?.clientes?.clientesTotales;
  const dataClientesTotalLunes = dataClientesColumn1Lunes + dataClientesColumn2Lunes + dataClientesColumn3Lunes;
  //LUNES CASHBACK
  const dataCashbackColumn1Lunes =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.lunes +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.lunes +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.lunes;
  const dataCashbackColumn2Lunes =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Lunes;

  //MARTES CLIENTES
  const dataClientesColumn1Martes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.martes;
  const dataClientesColumn2Martes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.martes;
  const dataClientesColumn3Martes = data?.grafico?.clientes?.clientesTotales + dataClientesTotalLunes;
  const dataClientesTotalMartes = dataClientesColumn1Martes + dataClientesColumn2Martes + dataClientesColumn3Martes;
  //MARTES CASHBACK
  const dataCashbackColumn1Martes =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.martes +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.martes +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.martes;
  const dataCashbackColumn2Martes =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Martes;
  //MIERCOLES CLIENTES
  const dataClientesColumn1Miercoles = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.miercoles;
  const dataClientesColumn2Miercoles = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.miercoles;
  const dataClientesColumn3Miercoles = data?.grafico?.clientes?.clientesTotales + dataClientesTotalMartes;
  const dataClientesTotalMiercoles = dataClientesColumn1Miercoles + dataClientesColumn2Miercoles + dataClientesColumn3Miercoles;
  //MIERCOLES CASHBACK
  const dataCashbackColumn1Miercoles =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.miercoles +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.miercoles +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.miercoles;
  const dataCashbackColumn2Miercoles =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Miercoles;
  //JUEVES CLIENTES
  const dataClientesColumn1Jueves = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.jueves;
  const dataClientesColumn2Jueves = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.jueves;
  const dataClientesColumn3Jueves = data?.grafico?.clientes?.clientesTotales + dataClientesTotalMiercoles;
  const dataClientesTotalJueves = dataClientesColumn1Jueves + dataClientesColumn2Jueves + dataClientesColumn3Jueves;
  //JUEVES CASHBACK
  const dataCashbackColumn1Jueves =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.jueves +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.jueves +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.jueves;
  const dataCashbackColumn2Jueves =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Jueves;
  //VIERNES CLIENTES
  const dataClientesColumn1Viernes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.viernes;
  const dataClientesColumn2Viernes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.viernes;
  const dataClientesColumn3Viernes = data?.grafico?.clientes?.clientesTotales + dataClientesTotalJueves;
  const dataClientesTotalViernes = dataClientesColumn1Viernes + dataClientesColumn2Viernes + dataClientesColumn3Viernes;
  //VIERNES CASHBACK
  const dataCashbackColumn1Viernes =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.viernes +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.viernes +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.viernes;
  const dataCashbackColumn2Viernes =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Viernes;
  //SABADO CLIENTES
  const dataClientesColumn1Sabado = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.sabado;
  const dataClientesColumn2Sabado = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.sabado;
  const dataClientesColumn3Sabado = data?.grafico?.clientes?.clientesTotales + dataClientesTotalViernes;
  const dataClientesTotalSabado = dataClientesColumn1Sabado + dataClientesColumn2Sabado + dataClientesColumn3Sabado;
  //SABADO CASHBACK
  const dataCashbackColumn1Sabado =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.sabado +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.sabado +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.sabado;
  const dataCashbackColumn2Sabado =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Sabado;
  //DOMINGO CLIENTES
  const dataClientesColumn1Domingo = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.domingo;
  const dataClientesColumn2Domingo = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.domingo;
  const dataClientesColumn3Domingo = data?.grafico?.clientes?.clientesTotales + dataClientesTotalSabado;
  const dataClientesTotalDomingo = dataClientesColumn1Domingo + dataClientesColumn2Domingo + dataClientesColumn3Domingo;
  //DOMINGO CASHBACK
  const dataCashbackColumn1Domingo =
    data?.grafico?.cashbacks?.cashbackAcumulado?.filtrado?.ultimos7Dias?.domingo +
    data?.grafico?.cashbacks?.cashbackGenerado?.filtrado?.ultimos7Dias?.domingo +
    data?.grafico?.cashbacks?.cashbackTotal?.filtrado?.ultimos7Dias?.domingo;
  const dataCashbackColumn2Domingo =
    data?.grafico?.cashbacks?.cashbackAcumulado?.total + data?.grafico?.cashbacks?.cashbackGenerado?.total + data?.grafico?.cashbacks?.cashbackTotal?.total + dataCashbackColumn1Domingo;
  //TOTALES CLIENTES
  const dataClientesColumn1Total =
    dataClientesColumn1Lunes +
    dataClientesColumn1Martes +
    dataClientesColumn1Miercoles +
    dataClientesColumn1Jueves +
    dataClientesColumn1Viernes +
    dataClientesColumn1Sabado +
    dataClientesColumn1Domingo;
  const dataClientesColumn2Total =
    dataClientesColumn2Lunes +
    dataClientesColumn2Martes +
    dataClientesColumn2Miercoles +
    dataClientesColumn2Jueves +
    dataClientesColumn2Viernes +
    dataClientesColumn2Sabado +
    dataClientesColumn2Domingo;
  const dataClientesColumn3Total =
    dataClientesColumn3Lunes +
    dataClientesColumn3Martes +
    dataClientesColumn3Miercoles +
    dataClientesColumn3Jueves +
    dataClientesColumn3Viernes +
    dataClientesColumn3Sabado +
    dataClientesColumn3Domingo;
  const dataClientesTotalTotal =
    dataClientesTotalLunes + dataClientesTotalMartes + dataClientesTotalMiercoles + dataClientesTotalJueves + dataClientesTotalViernes + dataClientesTotalSabado + dataClientesTotalDomingo;
  //TOTALES CASHBACK
  const dataCashbackColumn1Total =
    dataCashbackColumn1Lunes +
    dataCashbackColumn1Martes +
    dataCashbackColumn1Miercoles +
    dataCashbackColumn1Jueves +
    dataCashbackColumn1Viernes +
    dataCashbackColumn1Sabado +
    dataCashbackColumn1Domingo;
  const dataCashbackColumn2Total =
    dataCashbackColumn2Lunes +
    dataCashbackColumn2Martes +
    dataCashbackColumn2Miercoles +
    dataCashbackColumn2Jueves +
    dataCashbackColumn2Viernes +
    dataCashbackColumn2Sabado +
    dataCashbackColumn2Domingo;

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
              <TableCell align="center">{dataClientesColumn1Lunes}</TableCell>
              <TableCell align="center">{dataClientesColumn2Lunes}</TableCell>
              <TableCell align="center">{dataClientesColumn3Lunes}</TableCell>
              <TableCell align="center">{dataClientesTotalLunes}</TableCell>
            </TableRow>
            {/* MARTES */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Martes}</TableCell>
              <TableCell align="center">{dataClientesColumn2Martes}</TableCell>
              <TableCell align="center">{dataClientesColumn3Martes}</TableCell>
              <TableCell align="center">{dataClientesTotalMartes}</TableCell>
            </TableRow>
            {/* MIERCOLES */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Miercoles}</TableCell>
              <TableCell align="center">{dataClientesColumn2Miercoles}</TableCell>
              <TableCell align="center">{dataClientesColumn3Miercoles}</TableCell>
              <TableCell align="center">{dataClientesTotalMiercoles}</TableCell>
            </TableRow>
            {/* JUEVES */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Jueves}</TableCell>
              <TableCell align="center">{dataClientesColumn2Jueves}</TableCell>
              <TableCell align="center">{dataClientesColumn3Jueves}</TableCell>
              <TableCell align="center">{dataClientesTotalJueves}</TableCell>
            </TableRow>
            {/* VIERNES */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Viernes}</TableCell>
              <TableCell align="center">{dataClientesColumn2Viernes}</TableCell>
              <TableCell align="center">{dataClientesColumn3Viernes}</TableCell>
              <TableCell align="center">{dataClientesTotalViernes}</TableCell>
            </TableRow>
            {/* SABADO */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Sabado}</TableCell>
              <TableCell align="center">{dataClientesColumn2Sabado}</TableCell>
              <TableCell align="center">{dataClientesColumn3Sabado}</TableCell>
              <TableCell align="center">{dataClientesTotalSabado}</TableCell>
            </TableRow>
            {/* DOMINGO */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Domingo}</TableCell>
              <TableCell align="center">{dataClientesColumn2Domingo}</TableCell>
              <TableCell align="center">{dataClientesColumn3Domingo}</TableCell>
              <TableCell align="center">{dataClientesTotalDomingo}</TableCell>
            </TableRow>
            {/* TOTAL */}
            <TableRow>
              <TableCell align="center">{dataClientesColumn1Total}</TableCell>
              <TableCell align="center">{dataClientesColumn2Total}</TableCell>
              <TableCell align="center">{dataClientesColumn3Total}</TableCell>
              <TableCell align="center">{dataClientesTotalTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {/* LUNES */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Lunes}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Lunes}</TableCell>
            </TableRow>
            {/* MARTES */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Martes}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Martes}</TableCell>
            </TableRow>
            {/* MIERCOLES */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Miercoles}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Miercoles}</TableCell>
            </TableRow>
            {/* JUEVES */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Jueves}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Jueves}</TableCell>
            </TableRow>
            {/* VIERNES */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Viernes}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Viernes}</TableCell>
            </TableRow>
            {/* SABADO */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Sabado}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Sabado}</TableCell>
            </TableRow>
            {/* DOMINGO */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Domingo}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Domingo}</TableCell>
            </TableRow>
            {/* TOTAL */}
            <TableRow>
              <TableCell align="center">${dataCashbackColumn1Total}</TableCell>
              <TableCell align="center">${dataCashbackColumn2Total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default TableWeekClientesCashback;
