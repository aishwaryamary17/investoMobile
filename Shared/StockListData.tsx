type ItemData = {
  id: string;
  category: string;
  stockName: string;
  stockSymbol: string;
  currentPrice: string;
  percentageGain: number;
  priceGain: number;
  stockGraph: {
    timeRange: string;
    interval: string;
    data: number[];
  };
};

export const stockList: ItemData[] = [
  {
    id: "1",
    category: "Main Market",
    stockSymbol: "DJIA",
    stockName: "Apple Inc.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -10],
    },
    currentPrice: "$25,585.69",
    percentageGain: -0.75,
    priceGain: 0.13,
  },
  {
    id: "2",
    category: "Main Market",
    stockSymbol: "NASDAQ",
    stockName: "Alphabet Inc.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [77, -3, -9, -55, 98, -32, 10, 96, 4, -51, 6, -8, 2, -9, 5],
    },
    currentPrice: "$2,500.45",
    percentageGain: 4.25,
    priceGain: 0.13,
  },
  {
    id: "3",
    category: "Main Market",
    stockSymbol: "S&P 500",
    stockName: "JPMorgan Chase & Co.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [
        -6, 99, -52, -69, -13, 82, -94, 35, -97, 24, -30, -48, -84, 11, 72,
      ],
    },
    currentPrice: "$23,130.50",
    percentageGain: 13.49,
    priceGain: 0.13,
  },
  {
    id: "4",
    category: "Main Market",
    stockSymbol: "RUSS 2k",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [
        -93, -31, -47, -78, 92, -20, 55, -88, 96, -40, -19, -95, 99, -68, -37,
      ],
    },
    currentPrice: "$43,130.00",
    percentageGain: -1.01,
    priceGain: 0.13,
  },
  {
    id: "8",
    category: "Main Market",
    stockSymbol: "NASDAQDJ3",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [
        -4, -85, 69, 55, 98, -12, 17, -47, 30, -93, -47, -78, 89, -26, -43,
      ],
    },
    currentPrice: "$43,130.00",
    percentageGain: -2.67,
    priceGain: 0.13,
  },
  {
    id: "9",
    category: "Main Market",
    stockSymbol: "NASDAQDJ4",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [74, 85, 69, -5, -38, -92, -17, 47, 30, 63, -47, -78, 89, -26, 3],
    },
    currentPrice: "$43,130.00",
    percentageGain: -2.67,
    priceGain: 0.13,
  },
  {
    id: "10",
    category: "Main Market",
    stockSymbol: "NASDAQDJ5",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [
        -7, -8, -69, -55, 98, -92, -17, -47, 30, 63, 47, 78, -89, -26, -43,
      ],
    },
    currentPrice: "$43,130.00",
    percentageGain: 2.67,
    priceGain: 0.13,
  },
  {
    id: "11",
    category: "Main Market",
    stockSymbol: "NASDAQDJ6",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [92, 30, 47, 99, -85, -17, -55, -88, 63, 74, -43, 47, 78, 89, -99],
    },
    currentPrice: "$43,130.00",
    percentageGain: 2.67,
    priceGain: 0.13,
  },
  {
    id: "12",
    category: "Main Market",
    stockSymbol: "NASDAQDJ7",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [5, -2, 7, -4, 6, -3, 8, -5, 4, -1, 9, -6, 3, -8, 2],
    },
    currentPrice: "$43,130.00",
    percentageGain: -2.67,
    priceGain: 0.13,
  },
  {
    id: "24",
    category: "Junior Market",
    stockSymbol: "AAPL",
    stockName: "Apple Inc.",
    stockGraph: {
      timeRange: "1w",
      interval: "1h",
      data: [93, -31, 47, 78, 92, -20, -55, -88, 76, -40, 19, -95, 84, -68, 37],
    },
    currentPrice: "$156.23",
    percentageGain: 1.23,
    priceGain: 0.13,
  },
  {
    id: "36",
    category: "Junior Market",
    stockSymbol: "XOM",
    stockName: "Exxon Mobil Corporation",
    stockGraph: {
      timeRange: "1m",
      interval: "1d",
      data: [1, -81, 96, -53, -70, 16, 87, -46, 23, 63, 39, -92, 68, -36, -15],
    },
    currentPrice: "$60.78",
    percentageGain: -0.45,
    priceGain: 0.13,
  },
  {
    id: "48",
    category: "Junior Market",
    stockSymbol: "PFE",
    stockName: "Pfizer Inc.",
    stockGraph: {
      timeRange: "1y",
      interval: "1w",
      data: [74, -85, 69, -55, 38, -92, 17, -47, 30, -63, 47, -78, 89, -26, 43],
    },
    currentPrice: "$42.15",
    percentageGain: 0.78,
    priceGain: 0.13,
  },
  {
    id: "60",
    category: "Junior Market",
    stockSymbol: "JPM",
    stockName: "JPMorgan Chase & Co.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [
        -6, 99, -52, -69, -13, 82, -94, 35, -97, 24, -30, -48, -84, 11, 72,
      ],
    },
    currentPrice: "$150.67",
    percentageGain: -1.25,
    priceGain: 0.13,
  },
  {
    id: "72",
    category: "Junior Market",
    stockSymbol: "GOOGL",
    stockName: "Alphabet Inc.",
    stockGraph: {
      timeRange: "1w",
      interval: "1h",
      data: [
        -93, -31, -47, -78, 92, -20, 55, -88, 96, -40, -19, -95, 99, -68, -37,
      ],
    },
    currentPrice: "$2,345.89",
    percentageGain: 2.34,
    priceGain: 0.13,
  },
  {
    id: "84",
    category: "Junior Market",
    stockSymbol: "KO",
    stockName: "The Coca-Cola Company",
    stockGraph: {
      timeRange: "1m",
      interval: "1d",
      data: [50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -10],
    },
    currentPrice: "$54.21",
    percentageGain: -0.89,
    priceGain: 0.13,
  },
  {
    id: "96",
    category: "Junior Market",
    stockSymbol: "TSLA",
    stockName: "Tesla, Inc.",
    stockGraph: {
      timeRange: "1y",
      interval: "1w",
      data: [8, -7, 7, -8, 6, -9, 5, -8, 4, -7, 3, -6, 2, -5, 1],
    },
    currentPrice: "$1,005.32",
    percentageGain: 3.45,
    priceGain: 0.13,
  },
  {
    id: "108",
    category: "Junior Market",
    stockSymbol: "AMZN",
    stockName: "Amazon.com, Inc.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [77, -3, -9, -55, 98, -32, 10, 96, 4, -51, 6, -8, 2, -9, 5],
    },
    currentPrice: "$3,256.78",
    percentageGain: 0.56,
    priceGain: 0.13,
  },
  {
    id: "120",
    category: "Junior Market",
    stockSymbol: "GS",
    stockName: "The Goldman Sachs Group, Inc.",
    stockGraph: {
      timeRange: "1w",
      interval: "1h",
      data: [2, -8, 4, -7, 6, -6, 8, -5, 10, -4, 9, -3, 7, -2, 5],
    },
    currentPrice: "$420.15",
    percentageGain: -1.34,
    priceGain: 0.13,
  },
  {
    id: "25",
    category: "FX Rates",
    stockSymbol: "AAPL",
    stockName: "Apple Inc.",
    stockGraph: {
      timeRange: "1w",
      interval: "1h",
      data: [
        -93, -31, -47, -78, 92, -20, 55, -88, 96, -40, -19, -95, 99, -68, -37,
      ],
    },
    currentPrice: "$156.23",
    percentageGain: 1.23,
    priceGain: 0.13,
  },
  {
    id: "38",
    category: "FX Rates",
    stockSymbol: "XOM",
    stockName: "Exxon Mobil Corporation",
    stockGraph: {
      timeRange: "1m",
      interval: "1d",
      data: [
        -6, 99, -52, -69, -13, 82, -94, 35, -97, 24, -30, -48, -84, 11, 72,
      ],
    },
    currentPrice: "$60.78",
    percentageGain: -0.45,
    priceGain: 0.13,
  },
  {
    id: "51",
    category: "FX Rates",
    stockSymbol: "PFE",
    stockName: "Pfizer Inc.",
    stockGraph: {
      timeRange: "1y",
      interval: "1w",
      data: [74, -85, 69, -55, 38, -92, 17, -47, 30, -63, 47, -78, 89, -26, 43],
    },
    currentPrice: "$42.15",
    percentageGain: 0.78,
    priceGain: 0.13,
  },
  {
    id: "63",
    category: "FX Rates",
    stockSymbol: "JPM",
    stockName: "JPMorgan Chase & Co.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [1, -81, 96, -53, -70, 16, 87, -46, 23, 63, 39, -92, 68, -36, -15],
    },
    currentPrice: "$150.67",
    percentageGain: -1.25,
    priceGain: 0.13,
  },
  {
    id: "18",
    category: "Funds",
    stockSymbol: "GOOGL",
    stockName: "Alphabet Inc.",
    stockGraph: {
      timeRange: "1w",
      interval: "1h",
      data: [93, -31, 47, 78, 92, -20, -55, -88, 76, -40, 19, -95, 84, -68, 37],
    },
    currentPrice: "$2,420.31",
    percentageGain: 1.56,
    priceGain: 0.13,
  },
  {
    id: "23",
    category: "Funds",
    stockSymbol: "CVX",
    stockName: "Chevron Corporation",
    stockGraph: {
      timeRange: "1m",
      interval: "1d",
      data: [
        -93, -31, -47, -78, 92, -20, 55, -88, 96, -40, -19, -95, 99, -68, -37,
      ],
    },
    currentPrice: "$100.53",
    percentageGain: 0.89,
    priceGain: 0.13,
  },
  {
    id: "30",
    category: "Funds",
    stockSymbol: "JNJ",
    stockName: "Johnson & Johnson",
    stockGraph: {
      timeRange: "1y",
      interval: "1w",
      data: [1, -81, 96, -53, -70, 16, 87, -46, 23, 63, 39, -92, 68, -36, -15],
    },
    currentPrice: "$165.26",
    percentageGain: -0.32,
    priceGain: 0.13,
  },
  {
    id: "45",
    category: "Funds",
    stockSymbol: "WFC",
    stockName: "Wells Fargo & Company",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [
        -6, 99, -52, -69, -13, 82, -94, 35, -97, 24, -30, -48, -84, 11, 72,
      ],
    },
    currentPrice: "$44.92",
    percentageGain: -1.76,
    priceGain: 0.13,
  },
  {
    id: "52",
    category: "Funds",
    stockSymbol: "PG",
    stockName: "Procter & Gamble Company",
    stockGraph: {
      timeRange: "1w",
      interval: "1h",
      data: [74, -85, 69, -55, 38, -92, 17, -47, 30, -63, 47, -78, 89, -26, 43],
    },
    currentPrice: "$138.79",
    percentageGain: 0.98,

    priceGain: 0.13,
  },
];
