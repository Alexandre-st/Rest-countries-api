interface CountryProps {
  country: {
    region: string;
    flag: string;
  };
}

const Country: React.FC<CountryProps> = ({ country }) => {
  return (
    <div className="country">
      <p>{country.region}</p>
      <p>{country.flag}</p>
    </div>
  );
};

export default Country;
