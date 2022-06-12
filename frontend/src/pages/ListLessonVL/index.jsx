import React from "react";
import ListLessonVL from "../../components/ListLessonVL";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/Banner";
function ListLes() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Banner />
      <Header />
      <main>
        <ListLessonVL />
      </main>
      <Footer />
    </div>
  );
}

export default ListLes;
