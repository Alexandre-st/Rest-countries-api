import { useEffect, useState } from "react";
import Country from "./Country";

const BASE_URL = "https://restcountries.com/v3.1/all";

interface CountryType {
  flag: string;
  population: number;
  capital: string;
  common: string;
  region: string;
  capitals: string;
}

const Countries: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const fecthCountries = () => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data as CountryType[]);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fecthCountries();
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <section>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </section>
    </>
  );
};

export default Countries;
