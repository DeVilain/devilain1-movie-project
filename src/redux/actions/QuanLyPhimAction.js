import { movieApi } from "../../API/QuanLyPhimAPI/MovieApi";
import { get_Movie_List } from "../types/QuanLyPhimTypes";

export const getMovieList_request = (setLoading) => {
  return (dispatch) => {
    movieApi
      .getMovieList()
      .then((response) => {
        dispatch(getMovieList_action(response.data));
        console.log(`%cSuccess ${response.status} ${response.statusText}`, "color:green");
        setLoading(false);
      })
      .catch((err) => console.log(`%c${err}`, 'color: red'));
  };
};

export const getMovieList_action = (movieList) => {
  return {
    type: get_Movie_List,
    movieList,
  };
};

export const getSlides_action = (slides) => {
  return {
    type: "NEXT",
    slides,
  };
};
