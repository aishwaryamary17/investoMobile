import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PortfolioScreenLayout = () => {
  return (
    <View>
      <Text style={styles.protfolioInfoText}>
        Portfolio Screen Coming Soon !
      </Text>
    </View>
  );
};

export default PortfolioScreenLayout;

const styles = StyleSheet.create({
  protfolioInfoText: {
    paddingTop: 20,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
