import { useEffect, useState } from "react";

const App = () => {
  const url = import.meta.env.VITE_API_URL;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}/api/test`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData);
        console.log("Response:", res);
        console.log("Data:", jsonData);
      } catch (error) {
        console.error(`Error in fetch: ${error.message}`);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <h1>React With Django Rest Framework!</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
};

export default App;
