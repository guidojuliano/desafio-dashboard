import useData from '../../hooks/useData';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import CircularProgress from '@mui/material/CircularProgress';

const ChartYTG = () => {
  const { data, isLoading, isError } = useData();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  if (isLoading) {
    return <CircularProgress color="secondary" size="lg" variant="determinate" />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }

  const dataChart = {
    labels: ['2022', '2023'],
    datasets: [
      {
        data: [data?.grafico?.dinero?.dineroTotal?.filtrado?.ytg?.ano2022, data?.grafico?.dinero?.dineroTotal?.filtrado?.ytg?.ano2023],
        backgroundColor: ['#EB3535', '#7A35EB'],
        borderColor: ['#EB3535', '#7A35EB'],
        borderWidth: 1,
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
        display: false,
        position: 'bottom' as const,
      },
      title: {
        position: 'bottom' as const,
        display: true,
        text: 'YTG',
      },
    },
  };

  return <Bar options={options} data={dataChart} height={'200px'} />;
};

export default ChartYTG;
