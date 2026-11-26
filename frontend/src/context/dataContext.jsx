import { Children } from "react";
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext(null);
function DataProvider({ children }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  //useEffect Hook that is used for side effect like fetch api
  useEffect(() => {
    async function fetchData() {
      await fetch("https://6af437ef55a1de7dcf03b90e.mockapi.io/api/v1/movies")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setData(data)
        console.log(data)
      })
      .catch((err) => setError(err.message))
    }
    fetchData()
  }, [])
  if(error) {
    return <p>{error}</p>
  }
  if(loading) {
    return <p>loading...</p>
  }

  return (
    <DataContext.Provider value={{data}}>
        {children}
    </DataContext.Provider>
  )
}

export function useData() {
    return useContext(DataContext)
}
export default DataProvider;
