import React, { useState } from "react";
import { Text, StyleSheet, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import StockListCard from "./StockListCard";

const renderScene = SceneMap({
  first: StockListCard,
  second: StockListCard,
  third: StockListCard,
  fourth: StockListCard,
});

const MarketsCategory = () => {
  const layout = useWindowDimensions();
  const [activeKey, setActiveKey] = useState("Main Market");
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Main Market" },
    { key: "second", title: "Junior Market" },
    { key: "third", title: "FX Rates" },
    { key: "fourth", title: "FX Rate" },
  ]);

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        style={{ backgroundColor: "#2c53f5" }}
        tabStyle={styles.tab}
        renderLabel={({ route, focused, color }) => (
          <Text style={focused ? styles.activeLabel : styles.label}>
            {route.title}
          </Text>
        )}
        scrollEnabled={true}
        bounces={true}
        initialLayout={{ width: "auto" }}
        indicatorStyle={{ backgroundColor: "white" }}
      />
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      overScrollMode="always"
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
