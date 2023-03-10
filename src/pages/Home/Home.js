import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import MovieList from "../../components/Film/MovieList";
import TheaterMenu from "../../components/Theater/TheaterMenu";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    dispatch(layDanhSachHeThongRapAction());
  }, [dispatch]);

  return (
    <div className="bg-blue-200">
      <HomeCarousel />
      <section id="danhSachPhim" className="">
        <MovieList data={arrFilm} />
      </section>
      <section id="danhSachRap" className="mt-10 mx-24">
        <TheaterMenu heThongRapChieu={heThongRapChieu} />
      </section>
    </div>
  );
}
