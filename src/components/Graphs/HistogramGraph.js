import React from "react";
import Plot from "react-plotly.js";

function HistogramGraph({ data }) {
  const graphData = data.stats.instagram.timelineStats.timeline;
  const title = "Sentiment Category Timeline";

  const xaxisData = [];
  const yaxisData1 = [];
  const yaxisData2 = [];
  const yaxisData3 = [];

  const dateSplit = (date) => {
    let newdate = date.split("-");
    return newdate[2];
  };

  graphData &&
    graphData.map((item, index) => {
      index < 6 && xaxisData.push(dateSplit(item.date));
      index < 6 && yaxisData1.push(item.sentimentAsCategories.positiveComments);
      index < 6 && yaxisData2.push(item.sentimentAsCategories.neutralComments);
      index < 6 && yaxisData3.push(item.sentimentAsCategories.negativeComments);
    });

  return (
    <Plot
      data={[
        {
          x: xaxisData,
          y: yaxisData1,
          type: "bar",
          name: "positive",
          marker: {
            color: "green",
            opacity: 0.7,
          },
        },
        {
          x: xaxisData,
          y: yaxisData2,
          type: "bar",
          name: "neutral",
          marker: {
            color: "yellow",
            opacity: 0.7,
          },
        },
        {
          x: xaxisData,
          y: yaxisData3,
          type: "bar",
          name: "negetive",
          marker: {
            color: "red",
            opacity: 0.7,
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
        barmode: "group,",
      }}
    />
  );
}

export default HistogramGraph;
