import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllGames from "./components/AllGames/AllGames";
import Community from "./components/Community/Community";
import Games from "./Pages/Games";
import Home from "./Pages/Home";
import LayOut from "./Pages/LayOut";
import game1 from "./game-img/game1.jpeg";
import game2 from "./game-img/game2.jpeg";
import game3 from "./game-img/game3.jpeg";
import game4 from "./game-img/game4.jpeg";
import game5 from "./game-img/game5.jpeg";
import game6 from "./game-img/game6.jpeg";
import game7 from "./game-img/game7.jpeg";
import game8 from "./game-img/game8.jpeg";
import game9 from "./game-img/game9.jpeg";
import game10 from "./game-img/game10.jpeg";
import game11 from "./game-img/game11.jpeg";
import game12 from "./game-img/game12.jpeg";
import game13 from "./game-img/game13.jpeg";
import game14 from "./game-img/game14.jpeg";
import game15 from "./game-img/game15.jpeg";
import game16 from "./game-img/game16.jpeg";
import game17 from "./game-img/game17.jpeg";
import game18 from "./game-img/game18.jpeg";
import game19 from "./game-img/game19.jpeg";
import game20 from "./game-img/game20.png";
import game21 from "./game-img/game21.jpeg";
import game22 from "./game-img/game22.png";
import game23 from "./game-img/game23.jpeg";
import game24 from "./game-img/game24.jpeg";
import Error from "./Pages/Error";
import Login from "./components/Login/Login";
import Registration from "./components/Registration /Registration ";

function App() {
  const games = [
    {
      id: 1,
      img: game1,
      title: "Mortal Kombat X",
      body: "Warner Bros. Games ",
      btn: "купить за 19$",
    },
    {
      id: 2,
      img: game2,
      title: "Lords of the Fallen",
      body: "CI Games • Ролевые игры ",
      btn: "купить за 29$",
    },
    {
      id: 3,
      img: game3,
      title: "Little Nightmares",
      body: "BANDAI NAMCO Entertainment Экшн ",
      btn: "купить за 25$",
    },
    {
      id: 4,
      img: game4,
      title: "Alien: Isolation - Коллекция",
      body: "SEGA Europe Ltd • приключения",
      btn: "купить за 8$",
    },
    {
      id: 5,
      img: game5,
      title: "Sniper Ghost Warrior 3",
      body: "TCI Games • Стрелялки",
      btn: "купить за 39$",
    },
    {
      id: 6,
      img: game6,
      title: "Assassin's Creed IV Black Flag",
      body: "Ubisoft • Экшн и приключения",
      btn: "купить за 23$",
    },
    {
      id: 7,
      img: game7,
      title: "Brothers: a Tale of Two Sons",
      body: "505 Games • Экшн и приключения",
      btn: "купить за 19.9$",
    },
    {
      id: 8,
      img: game8,
      title: "Just Cause 3",
      body: "Square Enix • Экшн и приключения",
      btn: "купить за 17$",
    },
    {
      id: 9,
      img: game9,
      title: "Batman: Return to Arkham",
      body: "Warner Bros. Games Экшн",
      btn: "купить за 27$",
    },
    {
      id: 10,
      img: game10,
      title: "HITMAN Trilogy",
      body: "IO Interactive A/S •adventure ",
      btn: "купить за 99$",
    },
    {
      id: 11,
      img: game11,
      title: "Outer Wilds",
      body: "Annapurna Interactive •Strategy ",
      btn: "купить за 39$",
    },
    {
      id: 12,
      img: game12,
      title: "A Plague Tale: Innocence",
      body: "Focus Home Interactive Action",
      btn: "купить за 40$",
    },
    {
      id: 13,
      img: game13,
      title: "A Way Out",
      body: "Electronic Arts  adventure",
      btn: "купить за 18$",
    },
    {
      id: 14,
      img: game14,
      title: "Aliens: Fireteam Elite",
      body: "Cold Iron Studios • Shooter",
      btn: "купить за 39$",
    },
    {
      id: 15,
      img: game15,
      title: "Aragami 2",
      body: "Aragami 2",
      btn: "купить за 35$",
    },
    {
      id: 16,
      img: game16,
      title: "Batman™: Arkham Knight",
      body: "Warner Bros. Games • adventure",
      btn: "купить за 55$",
    },
    {
      id: 17,
      img: game17,
      title: "Battlefield™ 1 Revolution",
      body: "Electronic Arts • Action & adventure",
      btn: "купить за 30$",
    },
    {
      id: 18,
      img: game18,
      title: "Battlefield™ Hardline",
      body: "Electronic Arts • Shooter",
      btn: "купить за 69$",
    },
    {
      id: 19,
      img: game19,
      title: "Black Desert",
      body: "Pearl Abyss • Role playing ",
      btn: "купить за 49$",
    },
    {
      id: 20,
      img: game20,
      title: "BLACK™",
      body: "Electronic Arts • Shooter",
      btn: "купить за 15$",
    },
    {
      id: 21,
      img: game21,
      title: "Cities: Skylines - Xbox One Edition",
      body: "Paradox Interactive • Simulation",
      btn: "купить за 28$",
    },
    {
      id: 22,
      img: game22,
      title: "Conan Exiles",
      body: "Funcom • Action & adventure ",
      btn: "купить за 49$",
    },
    {
      id: 23,
      img: game23,
      title: "Dark Alliance",
      body: "Wizards of the Coast adventure",
      btn: "купить за 69$",
    },
    {
      id: 24,
      img: game24,
      title: "DayZ",
      body: "Bohemia Interactive a.s. • Action ",
      btn: "купить за 25$",
    },
  ];

  const [games1] = React.useState([...games]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [gamePerPage] = React.useState(6);
  const lastGameIndex = currentPage * gamePerPage;
  const firstGameIndex = lastGameIndex - gamePerPage;
  const currentGames = games1.slice(firstGameIndex, lastGameIndex);
  const paginat = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route
            path="/allgames"
            element={
              <AllGames
                games={games}
                gamePerPage={gamePerPage}
                games1={currentGames}
                paginat={paginat}
              />
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="registration" element={<Registration />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
