import { useRef } from 'react';
import { useInfiniteQuery } from '../../../hooks/useInfiniteQuery';

export interface IInfinitecoinList {
    queryKey: String;
    initialData: {}[];
}

const InfinitecoinList: React.FC<IInfinitecoinList> = ({
    queryKey,
    initialData,
}) => {
    const moreRef = useRef<HTMLDivElement>(null);

    const {
        data,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingInitialData,
        isFetchingNextPage,
    } = useInfiniteQuery(queryKey, initialData);

    // const loadMore = () => {
    //     if (isInViewPort(moreRef.current)) {
    //         fetchNextPage;
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', loadMore);

    //     return () => {
    //         window.removeEventListener('scroll', loadMore);
    //     };
    // }, []);

    if (isFetchingInitialData && data?.length === 0) {
        return (
            <div>
                <p className="text-white">No Coins yet! </p>
            </div>
        );
    }

    return (
        <div>
            {data?.map((coin) => (
                <p key={coin.id}>{coin.name}</p>
            ))}

            {isFetchingInitialData
                ? [...new Array(30)].map((_, i) => (
                      <p key={i}>....skeleton....</p>
                  ))
                : null}

            {hasNextPage ? (
                <div ref={moreRef} />
            ) : (
                <p className="text-red-600">no more data ...</p>
            )}
        </div>
    );
};

export default InfinitecoinList;
