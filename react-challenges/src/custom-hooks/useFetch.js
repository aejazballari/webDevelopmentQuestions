import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (api, headers = {}) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(api);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return [data];
};
export default useFetch;
