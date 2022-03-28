import React, { useState, useEffect } from "react";
import axios from "axios";
export default function PokeAPI() {
  const [Id, setId] = useState("25");
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");
  const [disName, setdisName] = useState("");


  useEffect(() => {
    async function getData() {

      try {

        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
        setId(res.data.id);
        setImg(res.data.sprites.front_default);
        setType(res.data.types[0].type.name);
        setdisName(res.data.species.name);

      } catch (error) {

        alert("¡Pokemon no existe!");
      }

    }

    getData();
  }, [Find]);

  const Typename = event => {
      setname(event.target.value);
  };

  //HandleSubmit
  const Search = () => {
    if (name !== "") setFind(name);
    setname(""); //Limpia el input text después de cada búsqueda
  };

  // const handleKeypress = e => {
  //   //it triggers by pressing the enter key
  //   if (e.keyCode === 13) {
  //     Search();
  //   }
  // }; 

  return (
    <>
      <div className="back">
        <div className="card">
          <img src={`${Img}`} alt="" />
          <div className="id">{Id}</div>

          <div className="name">{disName.toUpperCase()}</div>

          <div className="type">{Type}</div>

          <input type="text"  value={name} onChange={Typename} /*onKeyPress={handleKeypress}*/ 
          placeholder="Id ó Pokemon"/>
          <button type="submit" onClick={Search}>Go!</button>

        </div>
      </div>
    </>
  );
}
