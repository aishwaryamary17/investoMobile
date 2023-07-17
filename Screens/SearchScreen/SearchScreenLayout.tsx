import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import StockListCard from "../MarketsScreen/StockListCard";

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

const SearchScreenLayout = () => {
  const navigation = useNavigation();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState("");
  const [stockListData, setStockListData] = useState<ItemData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGoBack = () => {
    setIsSearch(false);
    setStockListData([]);
    setActiveKey("Main Market");
    setIsLoading(true);
    navigation.goBack();
  };
  const handleSearch = (text: string) => {
    setIsSearch(true);
    setStockListData([]);
    setActiveKey(text);
    setIsLoading(true);
  };

  return (
    <View>
      <View style={styles.searchBarWrap}>
        <SearchBar
          searchIcon={{ size: 22, color: "#ffffff" }}
          onChangeText={(text) => handleSearch(text || "")}
          placeholder="Search for stocks"
          containerStyle={{
            backgroundColor: "#2c53f5",
            borderBottomWidth: 0,
            borderTopWidth: 0,
            borderColor: "#2c53f5",
            width: 270,
          }}
          placeholderTextColor="#ffffff"
          inputContainerStyle={{
            backgroundColor: "#5c7cf7",
            borderRadius: 10,
          }}
          onCancel={handleGoBack}
          inputStyle={{ color: "#ffffff" }}
          value={activeKey}
        />
        <TouchableOpacity activeOpacity={1} onPress={handleGoBack}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <StockListCard
        activeKey={activeKey}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        stockListData={stockListData}
        setStockListData={setStockListData}
        isSearch={isSearch}
      />
    </View>
  );
};

export default SearchScreenLayout;

const styles = StyleSheet.create({
  searchBarWrap: {
    paddingTop: 0,
    paddingHorizontal: 20,
    backgroundColor: "#2c53f5",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelText: {
    color: "#ffffff",
  },
});
