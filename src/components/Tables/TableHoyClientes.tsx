import React from 'react';
import { Grid, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@mui/material';

const TableHoyClientes = () => {
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
              <TableCell align="center">Dato 1</TableCell>
              <TableCell align="center">Dato 2</TableCell>
              <TableCell align="center">Dato 3</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Dato 4</TableCell>
              <TableCell align="center">Dato 5</TableCell>
              <TableCell align="center">Dato 6</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Dato 4</TableCell>
              <TableCell align="center">Dato 5</TableCell>
              <TableCell align="center">Dato 6</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Dato 4</TableCell>
              <TableCell align="center">Dato 5</TableCell>
              <TableCell align="center">Dato 6</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Dato 4</TableCell>
              <TableCell align="center">Dato 5</TableCell>
              <TableCell align="center">Dato 6</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Dato 4</TableCell>
              <TableCell align="center">Dato 5</TableCell>
              <TableCell align="center">Dato 6</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Dato 4</TableCell>
              <TableCell align="center">Dato 5</TableCell>
              <TableCell align="center">Dato 6</TableCell>
              <TableCell align="center">Dato Total</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default TableHoyClientes;
