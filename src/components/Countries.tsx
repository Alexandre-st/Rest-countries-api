import { useEffect, useState } from "react";
import Country from "./Country";

const BASE_URL = "https://restcountries.com/v3.1/all";

interface CountryType {
  region: string;
  capital: string;
  population: number;
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
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
      <section className="country-container container">
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </section>
    </>
  );
};

export default Countries;
