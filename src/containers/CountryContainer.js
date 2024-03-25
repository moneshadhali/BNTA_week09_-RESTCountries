import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState(null);

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(()=>{
        loadCountries();
    }, [])

    useEffect(()=>{
        console.log(`countries: ${countries}`);
    }, [countries])

    return ( 
        <>
            {/* {JSON.stringify(countries)} */}
            {countries ? <CountryList countries={countries}/>
            : <p>Loading</p>
            }
            
        </>
    );
}
 
export default CountryContainer;