import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardGenericaProps } from './CardGenerica.types';

export default function CardGenerica({ clientes, ventasTotales, montoTotal, acumulado, mes, facturadoPrincipio, FacturadoMedio, FacturadoFinal }: CardGenericaProps) {
  return (
    <Card variant="elevation" sx={{ width: 300 }}>
      <CardContent>
        <Grid container>
          <Grid container item justifyContent={'center'}>
            <Typography variant={'h6'} fontWeight={'bold'}>
              {mes}
            </Typography>
          </Grid>
          <Grid container item justifyContent={'space-between'}>
            <Grid item>
              <Typography color={'inherit'}>Clientes</Typography>
            </Grid>
            <Grid item>
              <Typography color={'inherit'}>{clientes}</Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent={'space-between'}>
            <Grid item>
              <Typography color={'inherit'}>Ventas totales</Typography>
            </Grid>
            <Grid item>
              <Typography color={'inherit'}>{ventasTotales}</Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent={'space-between'}>
            <Grid item>
              <Typography color={'inherit'}>Monto total</Typography>
            </Grid>
            <Grid item>
              <Typography color={'inherit'}>${montoTotal}</Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent={'flex-start'}>
            <Typography variant={'h6'} fontWeight={'bold'}>
              Cashback
            </Typography>
          </Grid>
          <Grid container item justifyContent={'space-between'}>
            <Grid item>
              <Typography color={'inherit'}>Acumulado</Typography>
            </Grid>
            <Grid item>
              <Typography color={'inherit'}>${acumulado}</Typography>
            </Grid>
          </Grid>
          {mes === 'Septiembre' && (
            <>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 01/09</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${facturadoPrincipio}</Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 10/09</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${FacturadoMedio}</Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 20/09</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${FacturadoFinal}</Typography>
                </Grid>
              </Grid>
            </>
          )}
          {mes === 'Octubre' && (
            <>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 01/10</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${facturadoPrincipio}</Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 10/10</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${FacturadoMedio}</Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 20/10</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${FacturadoFinal}</Typography>
                </Grid>
              </Grid>
            </>
          )}
          {mes === 'Noviembre' && (
            <>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 01/11</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${facturadoPrincipio}</Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 10/11</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${FacturadoMedio}</Typography>
                </Grid>
              </Grid>
              <Grid container item justifyContent={'space-between'}>
                <Grid item>
                  <Typography color={'inherit'}>Facturado 20/11</Typography>
                </Grid>
                <Grid item>
                  <Typography color={'inherit'}>${FacturadoFinal}</Typography>
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
