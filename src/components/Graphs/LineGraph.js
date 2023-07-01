import Plot from "react-plotly.js";

function LineGraph({ data }) {
  const graphData = data.stats.instagram.timelineStats.timeline;
  const title = graphData[0].meanSentiment ? "Mean Sentiment" : "Hashtags";

  const xaxisData = [];
  const yaxisData = [];

  const dateSplit = (date) => {
    let newdate = date.split("-");
    return newdate[2];
  };

  graphData &&
    graphData.map((item, index) => {
      index < 6 && xaxisData.push(dateSplit(item.date));
      index < 6 && yaxisData.push(item.meanSentiment || item.total);
    });

  return (
    <Plot
      data={[
        {
          x: xaxisData,
          y: yaxisData,
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

export default LineGraph;
