import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
const URL =
  "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1&fullData=false";

export const VacContext = createContext();
export const VacProvider = ({ children }) => {
  const [data1, setData1] = useState();
  useEffect(() => {
    const getdata = async () => {
      await axios.get(URL).then((response) => {
        setData1(response.data);
      });
    };
    getdata();
  }, []);
  return (
    <VacContext.Provider value={{ data1 }}>{children}</VacContext.Provider>
  );
};
