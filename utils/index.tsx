export const urlGeko = 'https://api.coingecko.com/api/v3/coins';

export const ParseFloatToFixedTwo = (s: string) => {
    return parseFloat(s).toFixed(2);
};

export const ToMillions = (n: number) => {
    return `${(n / 1000000).toFixed(2) + ' ' + 'M'}`;
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export const isInViewPort = (currentRef) => {};
