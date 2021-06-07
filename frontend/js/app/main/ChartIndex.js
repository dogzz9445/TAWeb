import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOAD_CHARTDATA_REQUEST } from "../reducers/Chart";

import AppLayout from "./Components/AppLayout";
import ChartForm from "./Components/Chart/ChartForm";

const ChartIndex = () => {
    const dispatch = useDispatch();
    const { chartData, chartDataLoading } = useSelector((state) => state.Chart);

    useEffect(() => {
        console.log("Hi");
        dispatch({
            type: LOAD_CHARTDATA_REQUEST,
        });
    }, [chartDataLoading, chartData]);

    return (
        <>
            <AppLayout>
                {chartData.map((chartItem) => (
                    <ChartForm key={chartItem.id} chartItem={chartItem} />
                ))}
            </AppLayout>
        </>
    );
};

export default ChartIndex;
