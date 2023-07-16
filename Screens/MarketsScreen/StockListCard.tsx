import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import StockGraph from "./StockGraph";

type ItemData = {
  id: string;
  stockName: string;
  stockSymbol: string;
  currentPrice: string;
  percentageGain: number;
  stockGraph: {
    timeRange: string;
    interval: string;
    data: number[];
  };
};

const DATA: ItemData[] = [
  {
    id: "1",
    stockSymbol: "DJIA",
    stockName: "Apple Inc.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -10],
    },
    currentPrice: "$25,585.69",
    percentageGain: -0.75,
  },
  {
    id: "2",
    stockSymbol: "NASDAQ",
    stockName: "Alphabet Inc.",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [77, -3, -9, -55, 98, -32, 10, 96, 4, -51, 6, -8, 2, -9, 5],
    },
    currentPrice: "$2,500.45",
    percentageGain: 4.25,
  },
  {
    id: "3",
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
  },
  {
    id: "4",
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
  },
  {
    id: "5",
    stockSymbol: "NASDAQDJIA",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [93, -31, 47, 78, 92, -20, -55, -88, 76, -40, 19, -95, 84, -68, 37],
    },
    currentPrice: "$43,130.00",
    percentageGain: 2.67,
  },
  {
    id: "6",
    stockSymbol: "NASDAQDJ1",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [1, -81, 96, -53, -70, 16, 87, -46, 23, 63, 39, -92, 68, -36, -15],
    },
    currentPrice: "$43,130.00",
    percentageGain: -2.67,
  },
  {
    id: "7",
    stockSymbol: "NASDAQDJ2",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [74, -85, 69, -55, 38, -92, 17, -47, 30, -63, 47, -78, 89, -26, 43],
    },
    currentPrice: "$43,130.00",
    percentageGain: 2.67,
  },
  {
    id: "8",
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
  },
  {
    id: "9",
    stockSymbol: "NASDAQDJ4",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [74, 85, 69, -5, -38, -92, -17, 47, 30, 63, -47, -78, 89, -26, 3],
    },
    currentPrice: "$43,130.00",
    percentageGain: -2.67,
  },
  {
    id: "10",
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
  },
  {
    id: "11",
    stockSymbol: "NASDAQDJ6",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [92, 30, 47, 99, -85, -17, -55, -88, 63, 74, -43, 47, 78, 89, -99],
    },
    currentPrice: "$43,130.00",
    percentageGain: 2.67,
  },
  {
    id: "12",
    stockSymbol: "NASDAQDJ7",
    stockName: "Bank of America Corporation",
    stockGraph: {
      timeRange: "1d",
      interval: "1m",
      data: [5, -2, 7, -4, 6, -3, 8, -5, 4, -1, 9, -6, 3, -8, 2],
    },
    currentPrice: "$43,130.00",
    percentageGain: -2.67,
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <View style={styles.stockListItem}>
      <View style={styles.stockNameWrap}>
        <Text style={styles.stockSymbol}>{item.stockSymbol}</Text>
        <Text style={styles.stockName} numberOfLines={1} ellipsizeMode="tail">
          {item.stockName}
        </Text>
      </View>
      <View style={styles.stockGraphWrap}>
        <StockGraph
          height={40}
          width={80}
          color={item.percentageGain > 0 ? "green" : "red"}
          data={item.stockGraph.data}
        />
      </View>
      <View style={styles.stockValueWrap}>
        <Text style={styles.stockSymbol}>{item.currentPrice}</Text>
        <Text
          style={[
            styles.stockName,
            { color: item.percentageGain > 0 ? "green" : "red" },
          ]}
        >
          {item.percentageGain > 0
            ? `+${item.percentageGain}%`
            : `${item.percentageGain}%`}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const StockListCard = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [stockList, setStockList] = useState<ItemData[]>(DATA);

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stockList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 273,
  },
  item: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 32,
  },
  stockListItem: {
    display: "flex",
    flexDirection: "row",
  },
  stockName: {
    fontSize: 12,
    color: "#84828d",
  },
  stockSymbol: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: "800",
  },
  stockGraphWrap: {
    flexBasis: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  stockValueWrap: {
    flexBasis: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  stockNameWrap: {
    flexBasis: 0,
    flexGrow: 1,
    textAlign: "justify",
  },
});

export default StockListCard;
