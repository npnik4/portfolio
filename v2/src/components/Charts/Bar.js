/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Chart from "chart.js";

function Bar(props) {
  useEffect(() => {
    loadChart();
  }, []);

  const loadChart = () => {
    var ctx = document.getElementById("myChart");
    const color = props.light ? "#e8e8e8" : "#000";
    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: [
          "JavaScript",
          "Java",
          "HTML5",
          "CSS/SASS",
          "React.js",
          "Python",
        ],
        datasets: [
          {
            label: "Y.O.E",
            data: [2.7, 2, 2.7, 2.7, 2.5, 0.7],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          labels: {
            fontColor: color,
          },
        },
      },
    });
  };
  return <canvas id="myChart" width="400" height="400"></canvas>;
}

export default Bar;
