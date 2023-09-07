import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h1>React Movies</h1>
      <div className="routingBtn">
        <Link to="/">
          <button>Accueil</button>
        </Link>
        <Link to="/like">
          <button>Coups de coeur</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
