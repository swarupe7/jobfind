import {useState, useEffect} from "react";
import axios from "axios";

const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError] =useState(null);
   

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': '9a2653588cmsh00d747918cea197p103906jsn134d17b70e07',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query },
 
};
const fetchData=async()=>{
    setIsLoading(true);
    try {
        const response = await axios.request(options);
        setData(response.data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
        alert('Error');
    }finally{
        setIsLoading(false);
    }

}

useEffect(()=>{
    fetchData();

},[]);

const refetch=()=>{
    setIsLoading(true);
    fetchData();
}


return {data,isLoading,error,refetch};



}
export default useFetch;

