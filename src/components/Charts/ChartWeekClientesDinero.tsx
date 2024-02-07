import React from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import useData from '../../hooks/useData';
import CircularProgress from '@mui/material/CircularProgress';

const ChartWeekClientesDinero = () => {
  const { data, isLoading, isError } = useData();

  ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController);

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }

  const labels = Object.keys(data?.grafico?.clientes?.clientesNuevos?.filtrado?.ultimos7Dias) || [];

  const mapData = (sourceData: any) => {
    return Object.values(sourceData).map((value) => value);
  };

  const dataChart = {
    labels: labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Dinero total',
        data: mapData(data.grafico.dinero.dineroTotal.filtrado.ultimos7Dias),
        backgroundColor: '#EB3535',
        borderColor: '#EB3535',
        fill: false,
        yAxisID: 'y1',
      },
      {
        type: 'line' as const,
        label: 'Ventas',
        data: mapData(data.grafico.dinero.dineroVentas.filtrado.ultimos7Dias),
        backgroundColor: '#7A35EB',
        borderColor: '#7A35EB',
        fill: false,
        yAxisID: 'y1',
      },
      {
        type: 'line' as const,
        label: 'Devoluciones',
        data: [],
        backgroundColor: 'gray',
        borderColor: 'gray',
        hidden: true,
      },
      {
        type: 'bar' as const,
        label: 'Clientes totales',
        data: [],
        backgroundColor: '#EB7635',
        borderColor: '#EB7635',
        hidden: true,
      },
      {
        type: 'bar' as const,
        label: 'Clientes Nuevos',
        data: mapData(data.grafico.clientes.clientesNuevos.filtrado.ultimos7Dias),
        backgroundColor: '#2DCF5A',
        borderColor: '#2DCF5A',
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'Compraron',
        data: mapData(data.grafico.clientes.clientesCompraron.filtrado.ultimos7Dias),
        backgroundColor: '#358DEB',
        borderColor: '#358DEB',
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'No compraron',
        data: [],
        backgroundColor: '#EB3535',
        borderColor: '#EB3535',
        hidden: true,
      },
    ],
  };

  const options = {
    indexAxis: 'x' as const,

    elements: {
      bar: {
        borderWidth: 1,
      },
      line: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
        text: 'Week',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        position: 'left' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Chart type="bar" options={options} data={dataChart} height={'100px'} />;
};

export default ChartWeekClientesDinero;
