import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";

export const getTechs = () => async (dispatch) => {

    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({ type: GET_TECHS, payload: data });
    } catch (e) {
        
        dispatch({ type: TECHS_ERROR, payload: e.response.statusText });
    }

};

export const setLoading = () => {
  return {
    payload: SET_LOADING,
  };
};
