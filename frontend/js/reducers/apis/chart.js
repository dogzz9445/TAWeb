import api from '../api';

export const initialState = {
  chartData: [],
  chartDataLoading: false,
  chartDataDone: false,
  chartDataError: null,
};

// Action types
export const types = {
  FETCH_REQUESTED: 'chart/FETCH_REQUESTED',
  FETCH_SUCCESS: 'chart/FETCH_SUCCESS',
  FETCH_ERROR: 'chart/FETCH_ERROR',
};

// Action creators
export const creators = {
  fetchRestCheck: () => {
    return async (dispatch) => {
      dispatch({ type: types.FETCH_REQUESTED });
      try {
        const res = await api.get('/api/analyzed/decks/');
        dispatch({ type: types.FETCH_SUCCESS, data: res.data });
      } catch (error) {
        dispatch({ type: types.FETCH_ERROR, error });
      }
    };
  },
};

// Reducer
export const chartReducer = (state = initialState, action) => {
  // TODO:
  //   Modify state
  // switch (action.type) {
  //   case LOAD_CHARTDATA_REQUEST:
  //     draft.chartDataDone = false;
  //     draft.chartDataLoading = true;
  //     draft.chartDataError = null;
  //     console.log("요청");
  //     break;
  //   case LOAD_CHARTDATA_SUCCESS:
  //     draft.chartDataDone = true;
  //     draft.chartDataLoading = false;
  //     /* 추후 불러오는 부분 수정해야함. */
  //     draft.chartData = draft.chartData.concat(action.data);
  //     console.log(action.data);
  //     break;
  //   case LOAD_CHARTDATA_FAILURE:
  //     draft.chartDataLoading = false;
  //     draft.chartDataError = action.error;
  //     console.log("실패");
  //     break;
  //   default:
  //     break;
  // }
  if (action.type === types.FETCH_SUCCESS) return action.data;
  return state;
};
