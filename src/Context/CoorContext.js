import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
const URL = "https://disease.sh/v3/covid-19/countries";

export const CoorContext = createContext();
export const CoorProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getdata = async () => {
      await axios.get(URL).then((response) => {
        setData(response.data);
      });
    };
    getdata();
    // eslint-disable-next-line
  }, []);
  return (
    <CoorContext.Provider value={{ data }}>{children}</CoorContext.Provider>
  );
};
