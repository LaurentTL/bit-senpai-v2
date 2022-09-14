import data from '../../../lib/one-year-prices.json';
import { IChart } from './Chart';

const base: IChart = {
  id: 'Bitcoion',
  data: data.prices,
};

export const mockChartProps = {
  base,
};
