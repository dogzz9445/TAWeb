import React from "react";
import { Line } from "react-chartjs-2";

import styled from "@emotion/styled";

const ChartContainer = styled.div`
    height: 500px;
`;

const Chart = () => {
    const [value, setValue] = React.useState('Hello World');
    const handleChange = (e) => setValue(e.target.value);

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
            <div>
                <input type="text" value={value} onChange={handleChange} />    
            </div>
            <ChartContainer>
                <Line data={data} legend={legend} options={options} />
            </ChartContainer>
        </>
    );
};

export default Chart;
