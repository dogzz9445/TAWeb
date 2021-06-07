import axios from "axios";
import { all, call, fork, put, takeLatest, throttle } from "redux-saga/effects";
import {
    LOAD_CHARTDATA_FAILURE,
    LOAD_CHARTDATA_REQUEST,
    LOAD_CHARTDATA_SUCCESS,
} from "../reducers/Chart";

function loadChartDataAPI() {
    return axios.get(`/api/analyzed/recent/`);
}

function* loadChartData(action) {
    try {
        const result = yield call(loadChartDataAPI, action.data);

        yield put({
            type: LOAD_CHARTDATA_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_CHARTDATA_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadChart() {
    /* request time setting */
    yield throttle(60000, LOAD_CHARTDATA_REQUEST, loadChartData);
}

export default function* chartSaga() {
    yield all([fork(watchLoadChart)]);
}
