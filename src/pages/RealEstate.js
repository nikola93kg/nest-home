import React from "react";
import { Link } from "react-router-dom";
import "../styles/RealEstate.css";
import MiddleSection from "../components/MiddleSection";

function RealEstate() {
  return (
    <div className="realEstate-container gallery">
      <div className="title">
        <h1>Prodaja nekretnina</h1>
        <hr />
      </div>
      <div className="ponuda">
        <Link to={"/realestate/housing"}>
          <div className="stanovi box">Stanovi</div>
        </Link>

        <Link to={"/realestate/apartments"}>
          <div className="apartmani box">Apartmani</div>
        </Link>
      </div>
      <MiddleSection
        heading="Mi smo drugačiji"
        text="idemo u korak sa vremenom i standardima koji objektima obezbeđuju najviši nivo opremljenosti"
      />
    </div>
  );
}

export default RealEstate;
