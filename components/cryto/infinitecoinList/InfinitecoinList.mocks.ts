import { dataCoinMarketList } from '../../../lib/coinMarketList';
import { IInfinitecoinList } from './InfinitecoinList';

const base: IInfinitecoinList = {
    queryKey: 'TEST',
    initialData: dataCoinMarketList,
};

export const mockInfinitecoinListProps = {
    base,
};
