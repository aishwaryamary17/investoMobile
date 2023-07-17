import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NewsScreen = () => {
  return (
    <View>
      <Text style={styles.newsInfoText}>News Screen Coming Soon !</Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  newsInfoText: {
    paddingTop: 20,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
