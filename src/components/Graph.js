import React, { useEffect } from "react";

import Plot from "react-plotly.js";

function Graph({ data }) {
  const graphData = data.stats.instagram.timelineStats.timeline;
  const title = graphData[0].meanSentiment ? "Mean Sentiment" : "Hashtags";
  const xaxisData = [];
  const yaxisData = [];

  useEffect(() => {
    graphData.map((item, index) => {
      while (index < 6) {
        xaxisData.push(item.date);
        yaxisData.push(item.meanSentiment || item.total);
      }
    });
    console.log(xaxisData);
  }, []);

  return (
    <Plot
      data={[
        {
          x: [2, 3, 4, 5],
          y: [16, 5, 11, 9],
          mode: "lines",
        },
      ]}
      layout={{
        autosize: false,
        width: 280,
        height: 250,
        title: title,
        margin: {
          l: 40,
          r: 40,
          b: 80,
          t: 50,
          pad: 4,
        },
      }}
    />
  );
}

export default Graph;
