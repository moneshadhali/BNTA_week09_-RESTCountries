const Country = ({country}) => {
    return ( 
        <>
            <h2>Country name: {country.name.official}</h2>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Language: {country.languages}</p>
        </>
    );
}
 
export default Country;