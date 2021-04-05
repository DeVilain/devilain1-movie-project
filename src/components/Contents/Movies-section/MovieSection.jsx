import React, { useReducer, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList_request } from "../../../redux/actions/QuanLyPhimAction";
import Slide from "./Slide.jsx";

import { Spin } from "antd";

const MovieSection = () => {
  let dispatch_1 = useDispatch();

  const [loading, setLoading] = useState(true);

  // get movie-listt from redux store
  const movieList = useSelector((state) => state.QuanLyPhimReducer.movieList);

  useEffect(() => {
    // request API to get movie-list
    dispatch_1(getMovieList_request(setLoading));
  }, [dispatch_1]);

  // gán movie-list cho biến slides để thiết kế slider
  const slides = [...movieList];

  const initialState = {
    slideIndex: 0,
  };

  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length,
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
      };
    }
  };

  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <>
      {loading ? (
        <Spin
          tip="Loading..."
          size="large"
          style={{
            minHeight: 300,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Spin>
      ) : (
        <div className="slides" id="phim">
          <button onClick={() => dispatch({ type: "PREV" })}> ‹ </button>
          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}> › </button>
        </div>
      )}
    </>
  );
};

export default MovieSection;
