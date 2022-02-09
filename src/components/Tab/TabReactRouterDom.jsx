import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { RouterTabOne, RouterTabTwo, RouterTabThree } from "./routes";
// import styled from "styled-components";

const TabReactRouterDom = () => {
  return (
    <>
      <h3>Tab with React Router Dom</h3>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/one"}>one</Link>
          </li>
          <li>
            <Link to="/two">two</Link>
          </li>
          <li>
            <Link to="/three">three</Link>
          </li>
        </ul>
        <Routes>
          <Route path={"/"} element={<RouterTabOne />} />
          <Route path={"one"} element={<RouterTabOne />} />
          <Route path={"two"} element={<RouterTabTwo />} />
          <Route path={"three"} element={<RouterTabThree />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default TabReactRouterDom;
