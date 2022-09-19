import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";


function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-us-left">
        <h1>O nama</h1>
        <hr />
        <p>
          Primarno posvećeni izgradnji i prodaji nekretnina tako da kupci budu
          zadovoljni kvalitetom i da kupovinom našeg stambenog ili poslovnog
          prostora žive i rade u okruženju na način kako su to želeli. Težimo
          takvom kvalitetu koji će korisnicima obezbediti prijatno okruženje i
          poverenje za neke buduće saradnje. Kada su u pitanju tehnologije
          projektovanja i izgradnje trudićemo se da idemo u korak sa vremenom i
          standardima koji objektima obezbedjuju najviši nivo opremljenosti.
        </p>
      </div>
      <div className="about-us-right">
        <img src="https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="construction site" />
      </div>
    </motion.div>
  );
}

export default About;
