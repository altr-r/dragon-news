import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import HeaderMerque from "../components/HeaderMerque/HeaderMerque";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="merque w-11/12 mx-auto my-3">
          <HeaderMerque></HeaderMerque>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main_section">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default Home;
