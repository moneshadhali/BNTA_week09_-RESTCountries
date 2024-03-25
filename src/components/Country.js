const Country = ({country, handleVisitedCountry}) => {

    const languages = () => {
        for (const language in country.languages) {
            // console.log(language + " : " +country.languages[language]);
            return country.languages[language];
        }
    }

    function handleChange(e) {
        handleVisitedCountry(country);
    }

    
    return ( 
        <>
            <h3>Country name: {country.name.official}</h3>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            <p>Language: {languages()}</p>
            <button onClick={(e)=>handleChange(e)}>Visited</button>
            <img src = {country.flags.png} alt="" />
        </>
    );
}
 
export default Country;