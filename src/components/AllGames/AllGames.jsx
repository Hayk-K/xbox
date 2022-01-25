import React from "react";
import Card1 from "../Card1/Card1";
import "./AllGames.css";
import Pagination from "./Pagination";

const AllGames = ({ gamePerPage, games1, paginat, games }) => {
  return (
    <div>
      <div className="AllGames">
        {games1.map((game) => {
          return <Card1 card={game} key={game.id} />;
        })}
      </div>

      <div className="AllGames__pag">
        <Pagination
          gamePerPage={gamePerPage}
          totalGames={games.length}
          paginat={paginat}
        />
      </div>
    </div>
  );
};

export default AllGames;
