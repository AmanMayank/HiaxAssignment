import React from "react";
import Plot from "react-plotly.js";
import randomColor from "randomcolor";

const _ = require("lodash");

function BubbleGraph({ data }) {
  const graphData = data.stats.instagram.timelineStats.timeline;
  const title = "Hashtag Trend";

  const xaxisData = [];
  const yaxisData = [];

  const dateSplit = (date) => {
    let newdate = date.split("-");
    return newdate[2];
  };

  graphData &&
    graphData.map((item, index) => {
      if (!_.isEmpty(item.hashtags)) {
        const hashtags = Object.keys(item.hashtags);
        hashtags.map((hash) => {
          yaxisData.length < 10 && yaxisData.push(hash);
        });
        xaxisData.length < 10 && xaxisData.push(dateSplit(item.date));
      }
    });

  const plotData = yaxisData.map((hash, i) => {
    return {
      x: [xaxisData[i]],
      y: [1],
      mode: "markers",
      name: hash,
      marker: {
        color: [randomColor()],
        size: [20],
      },
    };
  });

  return (
    <Plot
      data={plotData}
      layout={{
        autosize: false,
        width: 400,
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

export default BubbleGraph;
