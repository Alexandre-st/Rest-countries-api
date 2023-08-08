interface CountryProps {
  country: {
    region: string;
    capital: string;
    population: number;
    name: {
      common: string;
    };
    flags: {
      svg: string;
    };
  };
}

const Country: React.FC<CountryProps> = ({ country }) => {
  return (
    <div className="country">
      <img src={country.flags.svg} alt={country.name.common} />
      <h2>{country.name.common}</h2>
      <ul>
        <li>
          <span>Population: </span>
          {country.population}
        </li>
        <li>
          <span>Region: </span>
          {country.region}
        </li>
        <li>
          <span>Capital: </span>
          {country.capital}
        </li>
      </ul>
    </div>
  );
};

export default Country;
