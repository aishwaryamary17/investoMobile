import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MarketsCategory from "./MarketsCategory";
import { useNavigation } from "@react-navigation/native";

const MarketsScreenLayout = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.MarketsHeaderWrapper}>
        <Text style={styles.MarketsHeaderText}>Markets</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("Explore");
          }}
        >
          <TextInput
            editable={false}
            placeholder="Search for stocks"
            placeholderTextColor="#ffffff"
            style={styles.input}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.marketsCategoryWrapper}>
        <MarketsCategory />
      </View>
    </View>
  );
};

export default MarketsScreenLayout;

const styles = StyleSheet.create({
  MarketsHeaderWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#2c53f5",
  },
  MarketsHeaderText: {
    fontSize: 38,
    fontWeight: "900",
    color: "#ffffff",
    paddingBottom: 5,
  },
  marketsCategoryWrapper: {
    height: "100%",
  },
  input: {
    backgroundColor: "#5c7cf7",
    borderRadius: 10,
    color: "#ffffff",
    paddingHorizontal: 20,
    height: 50,
  },
});
