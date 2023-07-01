import React from "react";
import Plot from "react-plotly.js";

const _ = require("lodash");

function BubbleGraph({ data }) {
  const graphData = data.stats.instagram.timelineStats.timeline;
  const title = "Hashtag Trend";

  const xaxisData = [];
  const yaxisData = [];
  const countData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const dateSplit = (date) => {
    let newdate = date.split("-");
    return newdate[2];
  };

  graphData &&
    graphData.map((item, index) => {
      if (!_.isEmpty(item.hashtags)) {
        console.log(item.hashtags);
        const hashtags = Object.keys(item.hashtags);
        hashtags.map((hash) => {
          yaxisData.length < 10 && yaxisData.push(hash);
        });
        xaxisData.length < 10 && xaxisData.push(dateSplit(item.date));
      }
      console.log(xaxisData, yaxisData);
    });

  return (
    <Plot
      data={[
        {
          x: xaxisData,
          y: countData,
          mode: "markers",
          name: yaxisData,
          marker: {
            color: [
              "red",
              "blue",
              "black",
              "brown",
              "green",
              "yellow",
              "black",
              "gray",
              "orange",
              "violet",
            ],
            size: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
          },
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

export default BubbleGraph;
