import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
        if(countries.includes(country)){
            addVisitedCountry(country);
            removeCountry(country);
        }else{
            addCountry(country);
            removeVisitedCountry(country);
        }
    }

    //Adding country to the visited countries
    const addVisitedCountry = (newCountries) => {
        setVisitedCountries([...visitedCountries, newCountries]);
    }
    //Adding country to the countries list
    const addCountry = (newCountries) => {
        setCountries([...countries, newCountries]);
    }

    //Removing country from the countries list
    const removeCountry = (removeCountry) => {
        // const filteredCountry = countries.filter(country => !removeCountryList.includes(country));
        const index = countries.indexOf(removeCountry);
        countries.splice(index, 1);
        setCountries([...countries]);
    }

    //Removing country from the vising coutries list
    const removeVisitedCountry = (removeCountry) => {
        const index = visitedCountries.indexOf(removeCountry);
        visitedCountries.splice(index, 1);
        setVisitedCountries([...visitedCountries]);
    }

    //Fetching the data from API
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
        <div className="countries">
            {/* {JSON.stringify(countries)} */}
            {countries ?
                <div>
                    <h2>Not Visited Countries</h2>
                    <CountryList countries={countries} handleVisitedCountry={handleVisitedCountry}/>
                </div>
                : <p>Loading</p>
            }

            {visitedCountries ?
                <div>
                    <h2>Visited Countries</h2>
                    <CountryList countries={visitedCountries} handleVisitedCountry={handleVisitedCountry}/>
                </div>
                : <p>Loading</p>
            }
        </div>
    );
}

export default CountryContainer;