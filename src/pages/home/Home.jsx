import React, { useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";
import "./home.css";
import PkCard from "../../components/pkcard/PkCard";
import axios from "axios";

export default function Home() {
  const [pokemonTeam, setPokemonTeam] = useState([]);

  const date = new Date();

  const generatePokemon = async () => {
    const pokemonIDs = [];

    do {
      const randomID = Math.floor(Math.random() * 150) + 1;

      if (!pokemonIDs.includes(randomID)) {
        pokemonIDs.push(randomID);
      }
    } while (pokemonIDs.length < 6); //max 6 pokemon only
    let promises = [];
    let pokemonObj = [];
    for (var i = 0; i < pokemonIDs.length; i++) {
      promises.push(
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIDs[i]}/`)
          .then((res) => {
            const { id, name, sprites, types } = res.data;
            pokemonObj.push({ id, name, sprites, types });
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
    Promise.all(promises);
    setPokemonTeam(pokemonObj);
  };

  return (
    <div className="Home">
      <img
        className="pokemonLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemonlogo.png"
      />
      <div className="cardGroup">
        <h1 className="homeTitle">Generate your Team!</h1>
        <div className="pokemonCards">
          {pokemonTeam.length === 6 ? (
            pokemonTeam.map((p) => {
              return (
                <PkCard
                  key={p.id}
                  name={p.name}
                  img={p.sprites.other["official-artwork"].front_default}
                  types={p.types}
                />
              );
            })
          ) : (
            <>
              <PkCard key={0} />
              <PkCard key={1} />
              <PkCard key={2} />
              <PkCard key={3} />
              <PkCard key={4} />
              <PkCard key={5} />
            </>
          )}
        </div>
        <button className="generateButton" onClick={generatePokemon}>
          Generate!
          <MdCatchingPokemon />
        </button>
        <div className="copyrightInfo">
          <p>
            Copyright {date.getFullYear()} <BiCopyright />
          </p>
        </div>
      </div>
    </div>
  );
}
