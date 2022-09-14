import dataPricesObject from '../../../lib/one-year-prices.json';
import { IChart } from './Chart';

const base: IChart = {
  id: 'Bitcoion',
  data: dataPricesObject,
};

export const mockChartProps = {
  base,
};
