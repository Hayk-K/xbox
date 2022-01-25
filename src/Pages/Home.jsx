import React from "react";
import Carousel from "../components/Carousel/MyCarousel";
import Main1 from "../components/Main1/Main1";
import Main2 from "../components/Main2/Main2";
import Main3 from "../components/Main3/Main3";
import xbox from "../img/xbox-one-x.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import img from "../img/img.png";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const Home = () => {
  const cards = [
    {
      id: 1,
      img: xbox,
      title: "XBOX ONE X",
      body: "Faster Processing Smoother Gameplay",
      btn: "Explore Consoles & Accessories",
    },
    {
      id: 2,
      img: logo2,
      title: "mixer Streaming",
      body: "The Next Generation Of Life Game ",
      btn: "Start Watching mixer",
    },
    {
      id: 3,
      img: logo3,
      title: "Free Games Every Month",
      body: "Get up to $700 in free games",
      btn: "Get Free Games",
    },
  ];
  const cards2 = [
    {
      id: 1,
      img: img,
      title: "Call of Duty: WWII",
      body: "The C.O.D.E. Bravery Pack is now ",
      btn: "See Details",
    },
    {
      id: 2,
      img: img1,
      title: "Destiny 2",
      body: "The Next Generation Of Life Game ",
      btn: "See Details",
    },
    {
      id: 3,
      img: img2,
      title: "STEEP",
      body: "Get up to $700 in free games",
      btn: "Get Free Games",
    },
    {
      id: 4,
      img: img3,
      title: "Forza Motorsport 7",
      body: "Get up to $700 in free games",
      btn: "Get Free Games",
    },
  ];

  return (
    <div className="App">
      <Carousel />
      <Main1 cards={cards} />
      <Main2 cards2={cards2} />
      <Main3 />
    </div>
  );
};

export default Home;
