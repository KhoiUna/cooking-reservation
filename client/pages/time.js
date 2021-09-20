import Layout from "../containers/layout";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

export default function Time({}) {
  const [timeData, setTimeData] = useState([]);
  useEffect(() => {
    //
  }, []);

  return (
    <Layout componentName="Busy Times">
      <h2 style={{ textAlign: "center" }}>Scatter Chart for Cooking Time</h2>

      <div
        style={{
          textAlign: "center",
          margin: "1rem 0 0 0",
          minHeight: "50vh",
        }}
      >
        <Chart
          width={"90%"}
          height={400}
          chartType="ScatterChart"
          loader={<p>Loading Chart...</p>}
          data={[
            ["Day of the week", "Time slot", "Time slot"],
            ["Sun", 10, 2],
            ["Mon", 2, 2],
            ["Tue", 12, 2],
            ["Wed", 3, 2],
            ["Thu", 4, 2],
            ["Fri", 6, 2],
            ["Sat", 8, 2],
          ]}
          options={{
            colors: ["#46166b"],
            pointSize: 10,
            hAxis: {
              title: "Day of the week",
            },
            vAxis: { title: "Time slot", minValue: 0, maxValue: 23 },
            legend: "none",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </Layout>
  );
}
