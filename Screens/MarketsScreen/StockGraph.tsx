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

  return (
    <LineChart
      style={{ height, width }}
      data={data}
      curve={shape.curveBasis}
      svg={{
        strokeWidth: 2,
        strokeLinecap: "round",
        stroke: color,
      }}
    ></LineChart>
  );
};

export default StockGraph;
