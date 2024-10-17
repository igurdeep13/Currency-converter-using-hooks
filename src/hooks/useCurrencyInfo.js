import {useEffect, useState} from "react"

function useCurrencyInfo(currency){

    const [data, setData] =  useState({})
    useEffect(() => {

        const fetchCurrencyData = async () => {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`);
            
            const data = await res.json();
            setData(data[currency]);
            console.log(data);
        }
            
        fetchCurrencyData()
    },[currency]);
    console.log(data)
    return data;
}

export default useCurrencyInfo;


