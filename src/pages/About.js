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
      <div className="about-us-first">
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
      </div>
      <div className="about-us-first about-us-second">
        <div className="about-us-left second-right">
          <h1>O projektu</h1>
          <hr />
          <p>
            Apartmanski kompleks je smešten u neposrednoj blizini Kompleksa Vile i Spa Plamenac
            i jednim je delom na granici borove šume. <br /> <br /> Krasi ga ušuškanost u urbanom delu Divčibara
            i na raskrsnici je puteva koji vode prema ski stazi i glavnog puta koji povezuje čitavu planinu.
            Koncept objekta zasniva se na prilagođavanju objekta konkretnoj lokaciji odnosno ideja planinske kuće
            preovladuje u obliku dvovodnog krova, koji se preliva na skoro sve nivoe osim prizemlja. Objekat ima četiri etaže.
            Sve etaže objekta su rezervisane za apartmane i skijašnicu koja se nalazi na najnižoj etaži. <br /> <br /> Apartmani imaju
            jasne podele na dnevne i noćne zone. Kolski pristup je obezbeđen preko puta, koji je asfaltiran sve do objekta
            i koji zbog blizine ugostiteljskih objekata koji su u neposrednoj blizini i predstavlja prioritet za čišćenje
            snežnih nanosa. Objekat ima predviđen parking prostor na parceli. Objekat je termoizolovan po standardima
            energetske efikasnosti. Fasadna stolarija je od šestokomornih PVC profila u boji i teksturi drveta
            sa Al roletnama. Ulazna vrata u stanove su sigurnosna. Grejanje objekta je predvidjeno električnom energijom
            sa sistemima u vidu el kotlova i radijatora na struju čija kontrola će biti moguća u svakoj pojedinačnoj
            stambenoj jedinici na daljinu (WiFi). Objekat će biti opremljen video nadzorom.
          </p>

        </div>
        <div className="about-us-right second-left">
          <img src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="construction site" />
        </div>
      </div>

    </motion.div>
  );
}

export default About;
