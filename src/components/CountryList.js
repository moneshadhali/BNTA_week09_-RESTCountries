import Country from "./Country";

const CountryList = ({countries, handleVisitedCountry}) => {
    const mappedCountries = countries.map(country => {
        return <Country country={country} handleVisitedCountry={handleVisitedCountry} />
    })
    return ( 
        <>
            {mappedCountries}
        </>
    );
}
 
export default CountryList;