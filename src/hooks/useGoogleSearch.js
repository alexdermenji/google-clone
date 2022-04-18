import { useEffect, useState } from "react";
import API_KEY from "../keys";
const CONTEXT_KEY = "c74f81dc3961b788f";
function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
