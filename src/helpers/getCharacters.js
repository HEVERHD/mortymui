import axios from "axios";
import { useEffect, useState } from "react";

export const getCharacters = async () => {
  const [listCharacter, setListCharacter] = useState([]);

  useEffect(() => {
    const enPoint = `https://rickandmortyapi.com/api/character`;
    axios
      .get(enPoint)
      .then((res) => {
        const apiData = res.data;
        console.log({ apiData });
        setListCharacter(apiData.results);
      })
      .catch((err) => {
        console.log(err);
      });
    return listCharacter;
  }, []);
};
