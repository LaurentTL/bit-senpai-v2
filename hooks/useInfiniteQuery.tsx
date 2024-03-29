import useSWRInfinite from 'swr/infinite';
import { fetcher } from '../lib/utils';

export const useInfiniteQuery = (queryKey: any, initialData: any) => {
    const { data, error, size, setSize } = useSWRInfinite(
        (pageIndex, previousPageData) => {
            if (previousPageData && previousPageData.after!) return null;
            if (pageIndex === 0) return queryKey;
            const search = queryKey.includes('?');
            return `${queryKey}${search ? '&' : '?'}cursor=${encodeURIComponent(
                JSON.stringify(previousPageData.after)
            )}`;
        },
        fetcher,
        initialData
    );

    const fetchNextPage = () => setSize((size) => size + 1);

    const flattenPages = data?.flatMap((page) => page.data) ?? [];
    const hasNextPage = Boolean(data?.[size - 1]?.after);
    const isFetchingInitialData = !data && !error;
    const isFetchingNextPage =
        isFetchingInitialData ||
        (size > 0 && data && typeof data[size - 1] === 'undefined');

    return {
        data: flattenPages,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingInitialData,
        isFetchingNextPage,
    };
};
