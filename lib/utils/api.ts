// ______________________________________________________________________________________________________________________________

// OLD COINGEKO ENDPOINTS

// ______________________________________________________________________________________________________________________________

export const CoinList = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: string) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id: any) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=365`;

export const TrendingCoins = (currency: string) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

// ______________________________________________________________________________________________________________________________

// NEW COINGEKO ENDPOINTS

// ______________________________________________________________________________________________________________________________

export const VsCurrency = () =>
  'https://api.coingecko.com/api/v3/simple/supported_vs_currencies';
