import React from "react";
import * as shape from "d3-shape";
import { LineChart } from "react-native-svg-charts";

type graphProps = {
  height: number;
  width: number;
  color: string;
  data: number[];
};

const StockGraph = (props: graphProps) => {
  const { height, width, color, data } = props;
  // const data = [
  //   50, -10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -10,
  // ];

  return (
    <LineChart
      style={{ height, width }}
      data={data}
      curve={shape.curveBasis}
      svg={{
        strokeWidth: 2,
        strokeLinecap: "rounded",
        stroke: color,
      }}
    ></LineChart>
  );
};

export default StockGraph;
