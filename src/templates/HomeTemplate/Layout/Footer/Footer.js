import _ from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachHeThongRapAction } from "../../../../redux/actions/QuanLyRapAction";

export default function Footer(props) {
  const dispatch = useDispatch();
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) => {
    return _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"]);
  });
  return (
    <footer className=" flex justify-between items-center py-6 bg-coolGray-100 text-coolGray-900 bg-blue-700">
      <div className="container mx-auto space-y-6 divide-gray-400 md:space-y-12">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <div
              href="#"
              className="flex justify-center space-x-3 md:justify-start text-white"
            >
              <div className="flex items-center justify-center w-1  rounded-full bg-violet-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 rounded-full text-coolGray-50"
                >
                  <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z" />
                </svg>
              </div>
              <span className="self-center text-2xl font-semibold ">
                 PHAN THANH LUÂN - VÕ HOÀNG ANH -- CAPSTONE MOVIE - BC05
              </span>
            </div>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <div className="grid grid-cols-3" style={{ color: "#fff" }}>
              {arrHeThongRap.map((heThongRap, index) => {
                return (
                  <div key={index.toString()}>
                    <img
                      src={heThongRap.logo}
                      alt="abc"
                      style={{ width: 50 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
