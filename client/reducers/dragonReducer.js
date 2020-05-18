import axios from 'axios';
//action types
const GET_DRAGONS = "GET_DRAGONS";

//action creator
const getDragonsFromServer = dragons => ({
  type: GET_DRAGONS,
  dragons
});

// thunk - function returned by another function
// handles AJAX requests
export const fetchDragons = () => async dispatch => { // thunk creator
  const { data } = await axios.get("/api/dragons"); // actual thunk
  const action = getDragonsFromServer(data);
  dispatch(action);
  /*setTimeout(() => {
    dispatch(action);
  }, 3000);*/
  
};

// initial data is empty array - we using thunk to populate the data from db
const initialState = {
  all: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGONS:
      return { ...state, all: action.dragons, loading: false };
    default:
      return state;
  }
};

export default reducer;