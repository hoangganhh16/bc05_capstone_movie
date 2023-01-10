import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "../HomeTemplate/Layout/Footer/Footer";
import Header from "../HomeTemplate/Layout/Header/Header";

export const UserTemplate = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {

        return (
          <div>
            <Header />
            <Component {...propsRoute} />
            {/* <Footer /> */}
          </div>
        );
      }}
    />
  );
};
