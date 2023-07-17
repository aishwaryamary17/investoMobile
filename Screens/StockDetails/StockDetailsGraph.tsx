import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

type DetailGraphProps = {
  color: string;
};

const StockDetailsGraph = (props: DetailGraphProps) => {
  const { color } = props;
  const [selectedTimeRange, setSelectedTimeRange] = useState("1d");

  const data = {
    "1d": [
      77, -3, -9, -55, 98, -32, 10, 96, 4, -51, 6, -8, 2, -9, 5, 22, -1, 45, 23,
      -12,
    ],
    "1w": [
      50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -10, 45, 23,
      -12,
    ],
    "1m": [
      -6, 99, -52, -69, -13, 82, -94, 35, -97, 24, -30, -48, -84, 11, 72, 45,
      23, -12,
    ],
    "3m": [93, -31, 47, 78, 92, -20, -55, -88, 76, -40, 19, -95, 84, -68, 37],
    "6m": [1, -81, 96, -53, -70, 16, 87, -46, 23, 63, 39, -92, 68, -36, -15],
    YTD: [
      -6, 99, -52, -69, -13, 82, -94, 35, -97, 24, -30, -48, -84, 11, 72, 45,
      23, -12,
    ],
    "1Y": [74, -85, 69, -55, 38, -92, 17, -47, 30, -63, 47, -78, 89, -26, 43],
  };

  const timeRanges = Object.keys(data);

  const handleTimeRangeChange = (timeRange) => {
    setSelectedTimeRange(timeRange);
  };

  return (
    <View style={styles.graphLayout}>
      <LineChart
        data={{
          datasets: [{ data: data[selectedTimeRange] }],
        }}
        width={445}
        height={200}
        yAxisLabel=""
        xAxisLabel=""
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        withShadow={false}
        withVerticalLabels={false}
        chartConfig={{
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => color,
          strokeWidth: 2,
          style: {
            borderRadius: 16,
            paddingRight: -50,
            marginLeft: -50,
          },
        }}
      />

      <View style={styles.rangeWrapper}>
        {timeRanges.map((timeRange) => (
          <TouchableOpacity
            key={timeRange}
            onPress={() => handleTimeRangeChange(timeRange)}
            style={{
              backgroundColor:
                selectedTimeRange === timeRange ? color : "#FFFFFF",
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
              marginRight: 10,
            }}
          >
            <Text
              style={{
                color: selectedTimeRange === timeRange ? "#ffffff" : "black",
              }}
            >
              {timeRange}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StockDetailsGraph;

const styles = StyleSheet.create({
  timeRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  graphLayout: {
    marginLeft: -65,
  },
  rangeWrapper: {
    display: "flex",
    flexDirection: "row",
    width: 400,
    paddingLeft: 80,
    justifyContent: "space-between",
  },
});
