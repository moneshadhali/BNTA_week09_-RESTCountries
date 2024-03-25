const Country = ({country}) => {

    const languages = () => {
        for (const language in country.languages) {
            // console.log(language + " : " +country.languages[language]);
            return country.languages[language];
        }
    }
    return ( 
        <>
            <h3>Country name: {country.name.official}</h3>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
            {/* <p>Language: {country.languages}</p> */}
            <p>Language: {languages()}</p>
        </>
    );
}
 
export default Country;