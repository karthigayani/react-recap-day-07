import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'; 
// import faker from 'faker';
// we didn't used faker so we don't need it

// from the above import statement we need to instal the packages 1. chart.js , 2.react-chartjs-2 
// You can also check the dependencies in codesandbox for the package details.

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
      // Typescript concent don't need it
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};



export function StackedChart({labels}) {
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Total Win',
        data: [47,45,154,38,156,24,65,31,137,39,162,51],
        borderColor: "hsl(255 95% 68%)",
        backgroundColor: "hsl(255 95% 68% / 50%)",
        lineTension: 0.2,
      },
      {
          fill: true,
          label: 'Total Loss',
          data: [61,27,54,143,119,46,47,45,54,138,56,24],
          borderColor: "hsl(197 100% 50%)",
          backgroundColor: "hsl(197 100% 50% / 50%)",
          lineTension: 0.2,
        },
    ],
  };
  return <Line options={options} data={data} />;
}
