import { useEffect, useState } from "react";
import useApi from "./hooks/useApi";
import Form from "./components/Form";
import CardLocation from "./components/CardLocation";
import CharacterCard from "./components/CharacterCard";
import Paginate from "./components/Paginate";

function App() {
  const random = Math.floor(Math.random() * 126);

  const [hasError, setHasError] = useState(true);
  const [id, setId] = useState(random);

  const [getLocation, dataLocation] = useApi();

  const [page, setPage] = useState(1);

  useEffect(() => {
    const urlLocation = `https://rickandmortyapi.com/api/location/${id}`;
    getLocation(urlLocation);

    setHasError(true);
  }, [id]);

  // Paginacion

  const quantity = 10;
  const total = Math.ceil(dataLocation?.residents.length / quantity);
  const pagination = () => {
    const end = quantity * page;
    const start = end - quantity;
    const character = dataLocation?.residents?.slice(start, end);
    return character;
  };

  const currentCharacters = pagination();

  return (
    <>
      <header className="app_header">
        <img src="../../assets/background.jpg" alt="Imagen" />
        <Form setId={setId} id={id} setHasError={setHasError} />
      </header>

      {hasError ? (
        <div>
          <CardLocation dataApi={dataLocation} />

          {dataLocation?.residents.length > 10 && 
          (
            <div>
              <Paginate page={page} setPage={setPage} total={total} />
            </div>
          )}

          <div className="character_box_main">
            {currentCharacters?.length === 0 ?  
              <h1>No se encontro ningun habitante para este planeta</h1>
            : 
            currentCharacters?.map((character, index) => (
              <CharacterCard character={character} key={index}/>
            ))
            }
          </div>
        </div>
      ) : (
        <div className="hasError">
          <h1>❌Hey! Deberia dar un numero entre 1 y 126 🙄</h1>
        </div>
      )}


    </>
  );
}

export default App;
