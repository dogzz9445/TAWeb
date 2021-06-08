import { all, fork } from "redux-saga/effects";
import axios from "axios";

import ChartSaga from "./ChartSaga";

axios.defaults.baseURL =
    "http://ec2-3-36-127-63.ap-northeast-2.compute.amazonaws.com:8000";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    yield all([fork(ChartSaga)]);
}
