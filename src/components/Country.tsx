interface CountryProps {
  country: {
    region: string;
    capital: string;
    population: number;
    name: {
      common: string;
      official: string;
    };
    flags: {
      svg: string;
    };
  };
}

const Country: React.FC<CountryProps> = ({ country }) => {
  return (
    <div className="country-content">
      <img src={country.flags.svg} alt={country.name.common} />
      <div className="country-content-text">
        <h2 className="country-content-text-title">{country.name.official}</h2>
        <ul>
          <li className="country-content-text-infos">
            <span>Population: </span>
            {country.population}
          </li>
          <li className="country-content-text-infos">
            <span>Region: </span>
            {country.region}
          </li>
          <li className="country-content-text-infos">
            <span>Capital: </span>
            {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
