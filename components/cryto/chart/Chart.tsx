import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export interface IChart {
  id: string;
  data: {
    // issue to type value of the data key, any for now
    [key: string]: any;
  };
}

const Chart: React.FC<IChart> = ({ id, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  const labels = data.prices.map((price: any) => {
    const date = new Date(price[0]);
    const formatDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
    return formatDate;
  });

  const dataChart = {
    type: 'line',
    labels,
    datasets: [
      {
        label: `${id}`,
        data: data.prices.map((price: any) => price[1]),
        borderColor: '#636dff',
        tension: 0.4,
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
      },
    ],
  };

  return (
    <div className="mx-3 -mt-14 mb-10 border border-gray-600 rounded-lg p-3 bg-black">
      <Line options={options} data={dataChart} />
    </div>
  );
};

export default Chart;
