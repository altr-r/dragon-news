import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <header>
        <Header></Header>
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
