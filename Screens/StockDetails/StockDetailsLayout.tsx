import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import StockDetailsGraph from "./StockDetailsGraph";

const StockDetailsLayout = () => {
  const route = useRoute();
  const { stockData } = route.params;
  const itemColor = stockData.percentageGain > 0 ? "green" : "red";

  return (
    <View style={styles.detailsWrapper}>
      <View style={styles.priceDetailWrap}>
        <Text style={styles.currentPriceText}>{stockData.currentPrice}</Text>
        <View style={styles.percentWrapper}>
          <Text style={[styles.stockPercent, { color: itemColor }]}>
            {stockData.percentageGain > 0
              ? `+${stockData.percentageGain}%`
              : `${stockData.percentageGain}%`}
          </Text>
          <Text style={[styles.stockPrice, { color: itemColor }]}>
            {stockData.percentageGain > 0
              ? `($${stockData.priceGain})`
              : `($${stockData.priceGain})`}
          </Text>
        </View>
      </View>
      <StockDetailsGraph color={itemColor} />
      <View style={styles.stockDetailsWrap}>
        <View style={styles.detailFlex}>
          <Text style={styles.detailText}>Close Price</Text>
          <Text style={styles.valueText}>25,654</Text>
        </View>
        <View style={styles.detailFlex}>
          <Text style={styles.detailText}>Last Trade Price</Text>
          <Text style={styles.valueText}>25,654</Text>
        </View>
        <View style={styles.detailFlex}>
          <Text style={styles.detailText}>Outstanding</Text>
          <Text style={styles.valueText}>856,924,677</Text>
        </View>
        <View style={styles.detailFlex}>
          <Text style={styles.detailText}>Market Value</Text>
          <Text style={styles.valueText}>{`$345,675,345,765`}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Add to Portfolio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StockDetailsLayout;

const styles = StyleSheet.create({
  detailsWrapper: {
    backgroundColor: "#ffffff",
    height: "100%",
  },
  priceDetailWrap: {
    padding: 20,
  },
  currentPriceText: {
    fontSize: 34,
    fontWeight: "800",
    paddingBottom: 5,
  },
  percentWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  stockPercent: {
    fontSize: 16,
  },
  stockPrice: {
    fontSize: 16,
    paddingLeft: 5,
  },
  stockDetailsWrap: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  detailFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  detailText: {
    fontSize: 16,
  },
  valueText: {
    fontSize: 16,
    fontWeight: "800",
  },
  appButtonContainer: {
    width: 320,
    height: 50,
    textAlign: "center",
    alignSelf: "center",
    elevation: 5,
    backgroundColor: "#2c53f5",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
