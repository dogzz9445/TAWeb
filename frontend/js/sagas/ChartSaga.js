import { all, call, fork, put, takeLatest, throttle } from "redux-saga/effects";
import api from "../reducers/api";
import { types as chartType } from "../reducers/apis/chart";

function* loadChartData(action) {
    try {
        const result = yield call(api.get('/api/analyzed/decks/'), action.data);

        yield put({
            type: chartType.FETCH_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: chartType.FETCH_ERROR,
            error: err.response.data,
        });
    }
}

function* watchLoadChart() {
    /* request time setting */
    yield throttle(60000, chartType.FETCH_REQUESTED, loadChartData);
}

export default function* chartSaga() {
    yield all([fork(watchLoadChart)]);
}
