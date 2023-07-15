import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const MarketsScreenLayout = () => {
  return (
    <View>
      <View style={styles.MarketsHeaderWrapper}>
        <Text style={styles.MarketsHeaderText}>Markets</Text>
        <SearchBar
          searchIcon={{ size: 24, color: "#ffffff" }}
          //   onChangeText={(text) => searchFilterFunction(text)}
          //   onClear={(text) => searchFilterFunction('')}
          placeholder="Search markets"
          containerStyle={{
            backgroundColor: "#2c53f5",
            borderBottomWidth: 0,
            borderTopWidth: 0,
            borderColor: "#2c53f5",
            paddingTop: 10,
            paddingHorizontal: 0,
          }}
          inputContainerStyle={{ backgroundColor: "#5c7cf7", borderRadius: 10 }}
          inputStyle={{ color: "#ffffff" }}
          //   value={search}
        />
      </View>
    </View>
  );
};

export default MarketsScreenLayout;

const styles = StyleSheet.create({
  MarketsHeaderWrapper: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#2c53f5",
  },
  MarketsHeaderText: {
    fontSize: 38,
    fontWeight: "900",
    color: "#ffffff",
    paddingBottom: 5,
  },
});
