import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apikey = "5517aebc5a0e4195898591095599f669";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=${apikey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};