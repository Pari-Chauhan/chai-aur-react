
// made it js not jsx as hooks contains mostly js code
// fetch is used to call API and also have then chain(which takes the arrow function as argument)
// The API is such that url k saath whatever currency is passed it'll give the list of multiple factor and name for each currency
// used setData inside the useEffect function because whenever we fetch API we set data(or changes the state)
// This is how a custom hook is created
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
