import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState(null);

    const addVisitedCountry = (newCountries) => {
        setVisitedCountries([...countries, newCountries]);
    }

    const loadCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        loadCountries();
    }, [])

    useEffect(() => {
        console.log(`countries: ${countries}`);
    }, [countries])

    return (
        <>
            {/* {JSON.stringify(countries)} */}
            {countries ? <CountryList countries={countries} />
                : <p>Loading</p>
            }

            {visitedCountries ?
                <>
                    <h2>Visited Countries</h2>
                    <CountryList countries={visitedCountries} />
                </>
                : <p>Loading</p>
            }
        </>
    );
}

export default CountryContainer;