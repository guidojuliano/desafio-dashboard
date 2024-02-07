import useData from '../../hooks/useData';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import CircularProgress from '@mui/material/CircularProgress';

const ChartWeekClientes = () => {
  const { data, isLoading, isError } = useData();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        label: 'Clientes totales',
        data: [],
        backgroundColor: '#EB3535',
        borderColor: '#EB3535',
        hidden: true,
      },
      {
        label: 'Clientes Nuevos',
        data: mapData(data.grafico.clientes.clientesNuevos.filtrado.ultimos7Dias),
        backgroundColor: '#EB7635',
        borderColor: '#EB7635',
        borderWidth: 1,
      },
      {
        label: 'Compraron',
        data: mapData(data.grafico.clientes.clientesCompraron.filtrado.ultimos7Dias),
        backgroundColor: '#358DEB',
        borderColor: '#358DEB',
        borderWidth: 1,
      },
      {
        label: 'No compraron',
        data: [],
        backgroundColor: '#2DCF5A',
        borderColor: '#2DCF5A',
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
  };

  return <Bar options={options} data={dataChart} height={'100px'} />;
};

export default ChartWeekClientes;
