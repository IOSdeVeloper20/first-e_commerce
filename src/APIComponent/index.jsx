import { useEffect } from "react";

//fetching data function
async function fetchData() {
  try {
    //fetch the data
    const response = await fetch("https://fakestoreapi.com/products");
    //check for data response
    if (!response.ok) {
      //go to catch block if there is an error
      throw new Error("TNetwork response was not ok.");
    }
    //if there is no error parse the returned data
    const data = await response.json();
    return data;
  } catch (error) {
    //error catch block
    console.error("Error while fetching Data", error);
    return null;
  }
}

const APIRequest = ({ setData, setLoading }) => {
  useEffect(() => {
    //function to get the data from fetchData function
    async function getData() {
      const fetchedData = await fetchData();
      //set the returned data to the useState
      setData(fetchedData);
      setLoading(false);
    }
    //invoke getData function on the first application render
    getData();
  }, [setData, setLoading]);

  return null;
};
export default APIRequest;
