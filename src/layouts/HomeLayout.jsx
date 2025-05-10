import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import HeaderMerque from "../components/HeaderMerque/HeaderMerque";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayout = () => {
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
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-6">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main_section col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
