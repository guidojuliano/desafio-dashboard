import React from 'react';
import { CircularProgress, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useData from '../../hooks/useData';

const TableWeekTransaccionesDinero = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }
  //LUNES TRANSACCIONES
  const dataTransaccionesTotalLunes = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.lunes;
  //LUNES DINERO
  const dataDineroColumn1Lunes = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.lunes;
  const dataDineroColumn2Lunes = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.lunes;
  const dataDineroTotalLunes = dataDineroColumn1Lunes + dataDineroColumn2Lunes;
  //MARTES TRANSACCIONES
  const dataTransaccionesTotalMartes = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.martes;
  //MARTES DINERO
  const dataDineroColumn1Martes = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.martes;
  const dataDineroColumn2Martes = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.martes;
  const dataDineroTotalMartes = dataDineroColumn1Martes + dataDineroColumn2Martes;
  //MIERCOLES TRANSACCIONES
  const dataTransaccionesTotalMiercoles = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.miercoles;
  //MIERCOLES DINERO
  const dataDineroColumn1Miercoles = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.miercoles;
  const dataDineroColumn2Miercoles = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.miercoles;
  const dataDineroTotalMiercoles = dataDineroColumn1Miercoles + dataDineroColumn2Miercoles;
  //JUEVES TRANSACCIONES
  const dataTransaccionesTotalJueves = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.jueves;
  //JUEVES DINERO
  const dataDineroColumn1Jueves = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.jueves;
  const dataDineroColumn2Jueves = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.jueves;
  const dataDineroTotalJueves = dataDineroColumn1Jueves + dataDineroColumn2Jueves;
  //VIERNES TRANSACCIONES
  const dataTransaccionesTotalViernes = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.viernes;

  //VIERNES DINERO
  const dataDineroColumn1Viernes = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.viernes;
  const dataDineroColumn2Viernes = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.viernes;
  const dataDineroTotalViernes = dataDineroColumn1Viernes + dataDineroColumn2Viernes;
  //SABADO TRANSACCIONES
  const dataTransaccionesTotalSabado = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.sabado;
  //SABADO DINERO
  const dataDineroColumn1Sabado = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.sabado;
  const dataDineroColumn2Sabado = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.sabado;
  const dataDineroTotalSabado = dataDineroColumn1Sabado + dataDineroColumn2Sabado;
  //DOMINGO TRANSACCIONES
  const dataTransaccionesTotalDomingo = data?.grafico?.transacciones?.filtrado?.ultimos7Dias?.domingo;
  //DOMINGO DINERO
  const dataDineroColumn1Domingo = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.domingo;
  const dataDineroColumn2Domingo = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.domingo;
  const dataDineroTotalDomingo = dataDineroColumn1Domingo + dataDineroColumn2Domingo;
  //TOTAL TRANSACCIONES
  const dataTransaccionesTotalTotal =
    dataTransaccionesTotalLunes +
    dataTransaccionesTotalMartes +
    dataTransaccionesTotalMiercoles +
    dataTransaccionesTotalJueves +
    dataTransaccionesTotalViernes +
    dataTransaccionesTotalSabado +
    dataTransaccionesTotalDomingo;
  //TOTALES DINERO
  const dataDineroColumn1Total =
    dataDineroColumn1Lunes + dataDineroColumn1Martes + dataDineroColumn1Miercoles + dataDineroColumn1Jueves + dataDineroColumn1Viernes + dataDineroColumn1Sabado + dataDineroColumn1Domingo;
  const dataDineroColumn2Total =
    dataDineroColumn2Lunes + dataDineroColumn2Martes + dataDineroColumn2Miercoles + dataDineroColumn2Jueves + dataDineroColumn2Viernes + dataDineroColumn2Sabado + dataDineroColumn2Domingo;
  const dataDineroTotalTotal = dataDineroColumn1Total + dataDineroColumn2Total;

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
                <Typography variant={'caption'}>Transacciones</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant={'body2'}>Total</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* LUNES */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalLunes}</TableCell>
            </TableRow>
            {/* MARTES */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalMartes}</TableCell>
            </TableRow>
            {/* MIERCOLES */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalMiercoles}</TableCell>
            </TableRow>
            {/* JUEVES */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalJueves}</TableCell>
            </TableRow>
            {/* VIERNES */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalViernes}</TableCell>
            </TableRow>
            {/* SABADO */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalSabado}</TableCell>
            </TableRow>
            {/* DOMINGO */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalDomingo}</TableCell>
            </TableRow>
            {/* TOTAL */}
            <TableRow>
              <TableCell align="center">{dataTransaccionesTotalTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
      <Grid item>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                <Typography variant={'caption'}>Dinero</Typography>
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
                <Typography variant={'body2'}>Total</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* LUNES */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Lunes}</TableCell>
              <TableCell align="center">{dataDineroColumn2Lunes}</TableCell>
              <TableCell align="center">{dataDineroTotalLunes}</TableCell>
            </TableRow>
            {/* MARTES */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Martes}</TableCell>
              <TableCell align="center">{dataDineroColumn2Martes}</TableCell>
              <TableCell align="center">{dataDineroTotalMartes}</TableCell>
            </TableRow>
            {/* MIERCOLES */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Miercoles}</TableCell>
              <TableCell align="center">{dataDineroColumn2Miercoles}</TableCell>
              <TableCell align="center">{dataDineroTotalMiercoles}</TableCell>
            </TableRow>
            {/* JUEVES */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Jueves}</TableCell>
              <TableCell align="center">{dataDineroColumn2Jueves}</TableCell>
              <TableCell align="center">{dataDineroTotalJueves}</TableCell>
            </TableRow>
            {/* VIERNES */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Viernes}</TableCell>
              <TableCell align="center">{dataDineroColumn2Viernes}</TableCell>
              <TableCell align="center">{dataDineroTotalViernes}</TableCell>
            </TableRow>
            {/* SABADO */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Sabado}</TableCell>
              <TableCell align="center">{dataDineroColumn2Sabado}</TableCell>
              <TableCell align="center">{dataDineroTotalSabado}</TableCell>
            </TableRow>
            {/* DOMINGO */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Domingo}</TableCell>
              <TableCell align="center">{dataDineroColumn2Domingo}</TableCell>
              <TableCell align="center">{dataDineroTotalDomingo}</TableCell>
            </TableRow>
            {/* TOTAL */}
            <TableRow>
              <TableCell align="center">{dataDineroColumn1Total}</TableCell>
              <TableCell align="center">{dataDineroColumn2Total}</TableCell>
              <TableCell align="center">{dataDineroTotalTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default TableWeekTransaccionesDinero;
