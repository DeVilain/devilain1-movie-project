import { movieApi } from "../../API/QuanLyPhimAPI/MovieApi";
import { message } from "antd";

export const addMovieRequest = (movie, setErrors, setLoading, form) => {
  return (dispatch) => {
    movieApi
      .addMovie(movie)
      .then((response) => {
        setLoading(false);
        setErrors("");
        message.success("Thêm phim thành công!");
        console.log("%cAdd movie Success", "color:green", response.data);
        form.resetFields();
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err.response.data);
        message.error("Thêm phim không thành công!");
        console.log("%cAdd movie failed", "color:red", err.response.data);
      });
  };
};
