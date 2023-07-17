import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import StockGraph from "./StockGraph";
import { stockList } from "../../Shared/StockListData";
import { useNavigation } from "@react-navigation/native";

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

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  isLoading: boolean;
};

const Item = ({ item, onPress, isLoading }: ItemProps) => (
  <TouchableOpacity
    activeOpacity={1}
    // onLongPress={onPress}
    disabled={isLoading ? true : false}
    onPress={onPress}
    style={[styles.item]}
  >
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

type StockListProps = {
  activeKey: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  stockListData: ItemData[];
  setStockListData: React.Dispatch<React.SetStateAction<ItemData[]>>;
  isSearch: boolean;
};

const StockListCard = (props: StockListProps) => {
  const {
    activeKey,
    setIsLoading,
    isLoading,
    stockListData,
    setStockListData,
    isSearch,
  } = props;
  const [selectedId, setSelectedId] = useState<string>();
  const navigation = useNavigation();

  useEffect(() => {
    if (isSearch === false) {
      const stockListFilter = stockList.filter(
        (stock) => stock.category === activeKey
      );
      setStockListData(stockListFilter);
      setIsLoading(false);
    } else {
      const filteredItems = stockList.filter(
        (stock) =>
          stock.stockName.toLowerCase().includes(activeKey.toLowerCase()) ||
          stock.stockSymbol.toLowerCase().includes(activeKey.toLowerCase())
      );
      setStockListData(filteredItems);
      setIsLoading(false);
    }
  }, [activeKey]);

  const onStockCardClick = (item: ItemData) => {
    Keyboard.dismiss();
    handleNavigateToDetail(item);
  };

  const renderItem = ({ item }: { item: ItemData }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          onStockCardClick(item);
        }}
        isLoading={isLoading}
      />
    );
  };

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    }

    return null;
  };

  const handleNavigateToDetail = (stockData: ItemData) => {
    Keyboard.dismiss();
    navigation.navigate("Details", { stockData: stockData });
  };

  return (
    <SafeAreaView style={isSearch ? { marginBottom: 127 } : styles.container}>
      {isLoading === false && stockListData.length <= 0 ? (
        <Text style={styles.listEmptyText}>List is Empty</Text>
      ) : (
        <FlatList
          data={stockListData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          ListFooterComponent={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 240,
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
  loadingContainer: {
    display: "flex",
    height: 400,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listEmptyText: {
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
  },
});

export default StockListCard;
