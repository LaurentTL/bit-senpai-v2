import useSwr from 'swr';
import { fetcher } from '../lib/utils';

export const useFetchCoins = (url: string) => {
    const { data, error, isLoading } = useSwr(url, fetcher);

    return {
        coins: data,
        isLoading,
        setError: error,
    };
};
