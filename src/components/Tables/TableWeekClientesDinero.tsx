import React from 'react';
import { CircularProgress, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useData from '../../hooks/useData';

const TableWeekClientesDinero = () => {
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
  //LUNES DINERO
  const dataDineroColumn1Lunes = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.lunes;
  const dataDineroColumn2Lunes = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.lunes;
  const dataDineroTotalLunes = dataDineroColumn1Lunes + dataDineroColumn2Lunes;
  //MARTES CLIENTES
  const dataClientesColumn1Martes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.martes;
  const dataClientesColumn2Martes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.martes;
  const dataClientesColumn3Martes = data?.grafico?.clientes?.clientesTotales + dataClientesTotalLunes;
  const dataClientesTotalMartes = dataClientesColumn1Martes + dataClientesColumn2Martes + dataClientesColumn3Martes;
  //MARTES DINERO
  const dataDineroColumn1Martes = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.martes;
  const dataDineroColumn2Martes = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.martes;
  const dataDineroTotalMartes = dataDineroColumn1Martes + dataDineroColumn2Martes;
  //MIERCOLES CLIENTES
  const dataClientesColumn1Miercoles = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.miercoles;
  const dataClientesColumn2Miercoles = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.miercoles;
  const dataClientesColumn3Miercoles = data?.grafico?.clientes?.clientesTotales + dataClientesTotalMartes;
  const dataClientesTotalMiercoles = dataClientesColumn1Miercoles + dataClientesColumn2Miercoles + dataClientesColumn3Miercoles;
  //MIERCOLES DINERO
  const dataDineroColumn1Miercoles = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.miercoles;
  const dataDineroColumn2Miercoles = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.miercoles;
  const dataDineroTotalMiercoles = dataDineroColumn1Miercoles + dataDineroColumn2Miercoles;
  //JUEVES CLIENTES
  const dataClientesColumn1Jueves = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.jueves;
  const dataClientesColumn2Jueves = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.jueves;
  const dataClientesColumn3Jueves = data?.grafico?.clientes?.clientesTotales + dataClientesTotalMiercoles;
  const dataClientesTotalJueves = dataClientesColumn1Jueves + dataClientesColumn2Jueves + dataClientesColumn3Jueves;
  //JUEVES DINERO
  const dataDineroColumn1Jueves = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.jueves;
  const dataDineroColumn2Jueves = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.jueves;
  const dataDineroTotalJueves = dataDineroColumn1Jueves + dataDineroColumn2Jueves;
  //VIERNES CLIENTES
  const dataClientesColumn1Viernes = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.viernes;
  const dataClientesColumn2Viernes = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.viernes;
  const dataClientesColumn3Viernes = data?.grafico?.clientes?.clientesTotales + dataClientesTotalJueves;
  const dataClientesTotalViernes = dataClientesColumn1Viernes + dataClientesColumn2Viernes + dataClientesColumn3Viernes;
  //VIERNES DINERO
  const dataDineroColumn1Viernes = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.viernes;
  const dataDineroColumn2Viernes = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.viernes;
  const dataDineroTotalViernes = dataDineroColumn1Viernes + dataDineroColumn2Viernes;
  //SABADO CLIENTES
  const dataClientesColumn1Sabado = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.sabado;
  const dataClientesColumn2Sabado = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.sabado;
  const dataClientesColumn3Sabado = data?.grafico?.clientes?.clientesTotales + dataClientesTotalViernes;
  const dataClientesTotalSabado = dataClientesColumn1Sabado + dataClientesColumn2Sabado + dataClientesColumn3Sabado;
  //SABADO DINERO
  const dataDineroColumn1Sabado = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.sabado;
  const dataDineroColumn2Sabado = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.sabado;
  const dataDineroTotalSabado = dataDineroColumn1Sabado + dataDineroColumn2Sabado;
  //DOMINGO CLIENTES
  const dataClientesColumn1Domingo = data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias?.domingo;
  const dataClientesColumn2Domingo = data?.grafico?.clientes?.clientesCompraron?.filtrado?.ultimos7Dias?.domingo;
  const dataClientesColumn3Domingo = data?.grafico?.clientes?.clientesTotales + dataClientesTotalSabado;
  const dataClientesTotalDomingo = dataClientesColumn1Domingo + dataClientesColumn2Domingo + dataClientesColumn3Domingo;
  //DOMINGO DINERO
  const dataDineroColumn1Domingo = data?.grafico?.dinero?.dineroTotal?.filtrado?.ultimos7Dias?.domingo;
  const dataDineroColumn2Domingo = data?.grafico?.dinero?.dineroVentas?.filtrado?.ultimos7Dias?.domingo;
  const dataDineroTotalDomingo = dataDineroColumn1Domingo + dataDineroColumn2Domingo;
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

export default TableWeekClientesDinero;
