import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button, Grid, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CustomSwitch from '../components/CustomSwitch/CustomSwitch';
import Filters from '../components/Filtros/FiltrosDashboard';
import ChartHoyClientes from '../components/Charts/ChartHoyClientes';
import TableHoyClientes from '../components/Tables/TableHoyClientes';
import TableWeekClientes from '../components/Tables/TableWeekClientes';
import TableWeekClientesDinero from '../components/Tables/TableWeekClientesDinero';
import TableWeekTransaccionesDinero from '../components/Tables/TableWeekTransaccionesDinero';
import TableWeekClientesCashback from '../components/Tables/TableWeekClientesCashback';
import DashboardFilters from '../components/Filtros/FiltrosChart';
import ChartYTD from '../components/Charts/ChartYTD';
import ChartYTG from '../components/Charts/ChartYTG';
import ChartWeekClientes from '../components/Charts/ChartWeekClientes';
import ChartWeekClientesDinero from '../components/Charts/ChartWeekClientesDinero';
import ChartWeekTransaccionesDinero from '../components/Charts/ChartWeekTransaccionesDinero';
import ChartWeekClientesCashback from '../components/Charts/ChartWeekClientesCashback';
import CardsCashback from '../components/CardsCashback/Cards';
import FiltersPulso from '../components/Filtros/FiltrosDashboardPulso';
import ChartPulso from '../components/Charts/ChartPulso';
import TablePulso from '../components/Tables/TablePulso';

const Dashboard: NextPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('today');
  const [selectedFilterDashboard, setSelectedFilterDashboard] = useState<string[]>(['clientes']);
  const [selectedOption, setSelectedOption] = useState<'Grafico' | 'Pulso'>('Grafico');
  const [selectedFilterPulso, setSelectedFilterPulso] = useState<string>('pulso');

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleFilterDashboardChange = (filter: string) => {
    setSelectedFilterDashboard((prevFilters) => (prevFilters.includes(filter) ? prevFilters.filter((f) => f !== filter) : [...prevFilters, filter]));
  };

  const handleOptionChange = (option: 'Grafico' | 'Pulso') => {
    setSelectedOption(option);
  };

  const handleFilterPulsoChange = (filter: string) => {
    setSelectedFilterPulso(filter);
  };

  const renderChart = () => {
    switch (selectedFilter) {
      case 'today':
        return (
          <>
            {selectedFilterDashboard.includes('clientes') && selectedFilterDashboard.length === 1 && (
              <>
                <Grid item>
                  <ChartHoyClientes />
                </Grid>
                <Grid item container justifyContent={'flex-end'}>
                  <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                    <Typography fontFamily={'inherit'} fontSize={'bold'}>
                      Exportar Tabla
                    </Typography>
                  </Button>
                </Grid>
                <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
                  <TableHoyClientes />
                </Grid>
              </>
            )}
          </>
        );
      case 'week':
        return (
          <>
            {selectedFilterDashboard.includes('clientes') && selectedFilterDashboard.length === 1 && (
              <>
                <Grid item>
                  <ChartWeekClientes />
                </Grid>
                <Grid item container justifyContent={'flex-end'}>
                  <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                    <Typography fontFamily={'inherit'} fontSize={'bold'}>
                      Exportar Tabla
                    </Typography>
                  </Button>
                </Grid>
                <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
                  <TableWeekClientes />
                </Grid>
              </>
            )}
            {selectedFilterDashboard.length === 2 && selectedFilterDashboard.includes('clientes') && selectedFilterDashboard.includes('dinero') && (
              <>
                <Grid item>
                  <ChartWeekClientesDinero />
                </Grid>
                <Grid item container justifyContent={'flex-end'}>
                  <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                    <Typography fontFamily={'inherit'} fontSize={'bold'}>
                      Exportar Tabla
                    </Typography>
                  </Button>
                </Grid>
                <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
                  <TableWeekClientesDinero />
                </Grid>
              </>
            )}
            {selectedFilterDashboard.length === 2 && selectedFilterDashboard.includes('transacciones') && selectedFilterDashboard.includes('dinero') && (
              <>
                <Grid item>
                  <ChartWeekTransaccionesDinero />
                </Grid>
                <Grid item container justifyContent={'flex-end'}>
                  <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                    <Typography fontFamily={'inherit'} fontSize={'bold'}>
                      Exportar Tabla
                    </Typography>
                  </Button>
                </Grid>
                <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
                  <TableWeekTransaccionesDinero />
                </Grid>
              </>
            )}
            {selectedFilterDashboard.length === 2 && selectedFilterDashboard.includes('clientes') && selectedFilterDashboard.includes('cashback') && (
              <>
                <Grid item>
                  <ChartWeekClientesCashback />
                </Grid>
                <Grid item container justifyContent={'flex-end'}>
                  <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                    <Typography fontFamily={'inherit'} fontSize={'bold'}>
                      Exportar Tabla
                    </Typography>
                  </Button>
                </Grid>
                <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
                  <TableWeekClientesCashback />
                </Grid>
              </>
            )}
          </>
        );
      case 'month':
        return <p>Month</p>;
      case 'sixMonth':
        return <p>SixMonth</p>;
      case 'ytd':
        return (
          <>
            {selectedFilterDashboard.length === 1 && selectedFilterDashboard.includes('dinero') && (
              <>
                <Grid item container spacing={3}>
                  <Grid item xs={6}>
                    <ChartYTD />
                  </Grid>
                  <Grid item xs={6}>
                    <ChartYTG />
                  </Grid>
                </Grid>
              </>
            )}
          </>
        );
      case 'year':
        return <p>Year</p>;
      case 'max':
        return <p>Max</p>;
      case 'custom':
        return <p>Custom</p>;
      default:
        return (
          <>
            {selectedFilterDashboard.includes('clientes') && selectedFilterDashboard.length === 1 && (
              <>
                <Grid item>
                  <ChartHoyClientes />
                </Grid>
                <Grid item container justifyContent={'flex-end'}>
                  <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                    <Typography fontFamily={'inherit'} fontSize={'bold'}>
                      Exportar Tabla
                    </Typography>
                  </Button>
                </Grid>
                <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
                  <TableHoyClientes />
                </Grid>
              </>
            )}
          </>
        );
    }
  };

  const renderChartPulso = () => {
    switch (selectedFilterPulso) {
      case 'pulso':
        return (
          <>
            <Grid item>
              <ChartPulso />
            </Grid>
            <Grid item container justifyContent={'flex-end'}>
              <Button variant="text" color="secondary" startIcon={<DownloadIcon />}>
                <Typography fontFamily={'inherit'} fontSize={'bold'}>
                  Exportar Tabla
                </Typography>
              </Button>
            </Grid>
            <Grid item container direction={'row'} spacing={1} justifyContent={'center'}>
              <TablePulso />
            </Grid>
          </>
        );
      case 'sixMonth':
        return <p>SixMonth</p>;
      case 'ytd':
        return <p>YTD</p>;
      case 'year':
        return <p>Year</p>;
      case 'max':
        return <p>Max</p>;
      case 'custom':
        return <p>Custom</p>;
      default:
        return <p>Pulso</p>;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container spacing={2}>
          {/* Columna izquierda con componente de gráfico */}
          <Grid item xs={10}>
            {selectedOption === 'Grafico' && (
              <>
                <Grid container item direction={'row'} spacing={3}>
                  <Filters onChange={handleFilterChange} selectedFilter={selectedFilter} />
                </Grid>
                <Grid item sx={{ paddingTop: 5 }}>
                  <DashboardFilters onToggleFilter={handleFilterDashboardChange} selectedFilters={selectedFilterDashboard} />
                </Grid>
                <Grid container item direction={'column'} spacing={3} sx={{ padding: 5 }}>
                  {renderChart()}
                </Grid>
              </>
            )}
            {selectedOption === 'Pulso' && (
              <>
                <Grid container item direction={'row'} spacing={3}>
                  <FiltersPulso onChange={handleFilterPulsoChange} selectedFilter={selectedFilterPulso} />
                </Grid>
                <Grid container item direction={'column'} spacing={3} sx={{ padding: 5 }}>
                  {renderChartPulso()}
                </Grid>
              </>
            )}
          </Grid>

          {/* Columna derecha con tarjetas */}
          <Grid item xs={2}>
            <Grid container item direction="column" spacing={2}>
              <Grid item>
                <CustomSwitch onOptionChange={handleOptionChange} />
              </Grid>
              <CardsCashback />
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;
