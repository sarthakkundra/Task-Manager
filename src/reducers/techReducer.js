import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR,
    SET_LOADING,
    DELETE_TECHS,
  } from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_TECHS:
          return{
              ...state,
              techs: action.payload,
              loading: false
          }
        case ADD_TECH:
          return{
            ...state,
            techs: [...state.techs, action.payload]
          }
        case DELETE_TECH:
          return{
            ...state,
            techs: state.techs.map((tech) => tech.id === action.payload ? null : tech)
          }
      case TECHS_ERROR:
          return{
              ...state,
              error: action.payload
          }
      case SET_LOADING:
          return{
            ...state,
            loading: true
          }
      
    default:
      return state;
  }
};
