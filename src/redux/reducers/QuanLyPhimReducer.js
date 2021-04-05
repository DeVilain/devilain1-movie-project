import { get_Movie_List } from "../types/QuanLyPhimTypes";

const initialState = {
  movieList: [],
  slideIndex: 0,
};

export const QuanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_Movie_List:
      return { ...state, movieList: action.movieList };
    
    default:
      return state;
  }
};
