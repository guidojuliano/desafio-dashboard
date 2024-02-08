import { CircularProgress, Grid } from '@mui/material';
import CardGenerica from '../CardsCashback/CardGenerica';
import useData from '../../hooks/useData';

const CardsCashback = () => {
  const { data, isLoading, isError } = useData();

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }

  //SEPTIEMBRE
  const dataClientesSeptiembre = data?.pulso?.cashback?.septiembre?.clientesTotales;
  const dataVentasTotalesSeptiembre = data?.pulso?.cashback?.septiembre?.ventasTotales;
  const dataMontoTotalSeptiembre = data?.pulso?.cashback?.septiembre?.montoTotal;
  const dataAcumuladoSeptiembre = data?.pulso?.cashback?.septiembre?.acumulado;
  const dataFacturadoPrincipioSeptiembre = data?.pulso?.cashback?.septiembre?.dia1;
  const dataFacturadoMedioSeptiembre = data?.pulso?.cashback?.septiembre?.dia10;
  const dataFacturadoFinalSeptiembre = data?.pulso?.cashback?.septiembre?.dia20;

  //OCTUBRE
  const dataClientesOctubre = data?.pulso?.cashback?.octubre?.clientesTotales;
  const dataVentasTotalesOctubre = data?.pulso?.cashback?.octubre?.ventasTotales;
  const dataMontoTotalOctubre = data?.pulso?.cashback?.octubre?.montoTotal;
  const dataAcumuladoOctubre = data?.pulso?.cashback?.octubre?.acumulado;
  const dataFacturadoPrincipioOctubre = data?.pulso?.cashback?.octubre?.dia1;
  const dataFacturadoMedioOctubre = data?.pulso?.cashback?.octubre?.dia10;
  const dataFacturadoFinalOctubre = data?.pulso?.cashback?.octubre?.dia20;

  //NOVIEMBRE
  const dataClientesNoviembre = data?.pulso?.cashback?.noviembre?.clientesTotales;
  const dataVentasTotalesNoviembre = data?.pulso?.cashback?.noviembre?.ventasTotales;
  const dataMontoTotalNoviembre = data?.pulso?.cashback?.noviembre?.montoTotal;
  const dataAcumuladoNoviembre = data?.pulso?.cashback?.noviembre?.acumulado;
  const dataFacturadoPrincipioNoviembre = data?.pulso?.cashback?.noviembre?.dia1;
  const dataFacturadoMedioNoviembre = data?.pulso?.cashback?.noviembre?.dia10;
  const dataFacturadoFinalNoviembre = data?.pulso?.cashback?.noviembre?.dia20;

  return (
    <>
      <Grid item>
        <CardGenerica
          clientes={dataClientesSeptiembre}
          ventasTotales={dataVentasTotalesSeptiembre}
          montoTotal={dataMontoTotalSeptiembre}
          acumulado={dataAcumuladoSeptiembre}
          mes={'Noviembre'}
          facturadoPrincipio={dataFacturadoPrincipioSeptiembre}
          FacturadoMedio={dataFacturadoMedioSeptiembre}
          FacturadoFinal={dataFacturadoFinalSeptiembre}
        />
      </Grid>
      <Grid item>
        <CardGenerica
          clientes={dataClientesOctubre}
          ventasTotales={dataVentasTotalesOctubre}
          montoTotal={dataMontoTotalOctubre}
          acumulado={dataAcumuladoOctubre}
          mes={'Octubre'}
          facturadoPrincipio={dataFacturadoPrincipioOctubre}
          FacturadoMedio={dataFacturadoMedioOctubre}
          FacturadoFinal={dataFacturadoFinalOctubre}
        />
      </Grid>
      <Grid item>
        <CardGenerica
          clientes={dataClientesNoviembre}
          ventasTotales={dataVentasTotalesNoviembre}
          montoTotal={dataMontoTotalNoviembre}
          acumulado={dataAcumuladoNoviembre}
          mes={'Septiembre'}
          facturadoPrincipio={dataFacturadoPrincipioNoviembre}
          FacturadoMedio={dataFacturadoMedioNoviembre}
          FacturadoFinal={dataFacturadoFinalNoviembre}
        />
      </Grid>
    </>
  );
};

export default CardsCashback;
