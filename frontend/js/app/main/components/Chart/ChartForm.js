import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const ChartContainer = styled.div`
    height: 500px;
    margin: 100px;
`;

const Chart = ({ chart }) => {
    const chartData = [15, 12, 14, 16];
    const oneDay = [17, 13, 20, 33];
    const data = {
        labels: ["네임1", "네임2", "네임3", "네임4"],
        datasets: [
            //원소 1
            {
                label: "일간",
                data: chartData,
                // chartData && chartData.class_coverage,
                lineTension: 0,
                // backgroundColor: "rgba(15, 107, 255, 0.1)",
                borderWidth: 1,
                borderColor: "#0f6bff",
                // fill: true,
            },
            //원소2
            {
                label: "주간",
                data: oneDay,
                // chartData && chartData.method_coverage,
                lineTension: 0,
                // backgroundColor: "rgba(242, 184, 113, 0.1)",
                borderWidth: 1,
                borderColor: "#f2b471",
                // fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
    const legend = {
        display: true,
        labels: {
            fontColor: "black",
        },
        position: "top", //label를 넣어주지 않으면 position이 먹히지 않음
    };

    return (
        <>
            <ChartContainer>
                <Line data={data} legend={legend} options={options} />
                <div>{chart}asdasd</div>
            </ChartContainer>
        </>
    );
};

export default Chart;
