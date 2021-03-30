/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Chart from "chart.js";

function Doughnut(props) {
  useEffect(() => {
    loadChart();
  }, [props]);

  const loadChart = () => {
    var ctx = document.getElementById(props.id);
    new Chart(ctx, {
      type: "doughnut",
      data: props.data,
      options: props.options,
    });
  };
  return <canvas id={props.id} width="200" height="200"></canvas>;
}

export default Doughnut;
