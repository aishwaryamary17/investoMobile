import React, { useEffect, useState } from "react";
import { Text, StyleSheet, useWindowDimensions } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import StockListCard from "./StockListCard";
import { stockList } from "../../Shared/StockListData";

type ItemData = {
  id: string;
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

const MarketsCategory = () => {
  const layout = useWindowDimensions();
  const [activeKey, setActiveKey] = useState("Main Market");
  const [stockListData, setStockListData] = useState<ItemData[]>(stockList);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "mainMarket", title: "Main Market" },
    { key: "juniorMarket", title: "Junior Market" },
    { key: "fxRates", title: "FX Rates" },
    { key: "funds", title: "Funds" },
  ]);

  const renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        style={{ backgroundColor: "#2c53f5" }}
        tabStyle={styles.tab}
        renderLabel={({ route, focused, color }) => {
          return (
            <Text style={focused ? styles.activeLabel : styles.label}>
              {route.title}
            </Text>
          );
        }}
        scrollEnabled={true}
        bounces={true}
        initialLayout={{ width: "auto" }}
        indicatorStyle={{ backgroundColor: "white" }}
      />
    );
  };

  const renderScene = () => {
    return (
      <StockListCard
        activeKey={activeKey}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        stockListData={stockListData}
        setStockListData={setStockListData}
        isSearch={false}
      />
    );
  };

  const handleIndexChange = (index: number) => {
    const tabName = routes[index].title;
    setStockListData([]);
    setActiveKey(tabName);
    setIndex(index);
    setIsLoading(true);
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={handleIndexChange}
      overScrollMode="always"
      onSwipeStart={() => {
        setStockListData([]);
      }}
    />
  );
};

export default MarketsCategory;

const styles = StyleSheet.create({
  MarketsHeaderWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#2c53f5",
  },
  tab: {
    backgroundColor: "#2c53f5",
    width: 110,
    padding: 0,
  },
  activeLabel: {
    color: "#ffffff",
    fontWeight: "400",
    width: "auto",
    textAlign: "justify",
  },
  label: {
    color: "#7c97f4",
    width: "auto",
    fontWeight: "400",
    textAlign: "justify",
  },
});
