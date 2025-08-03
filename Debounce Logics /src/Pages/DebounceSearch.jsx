import React, { useEffect, useState } from "react";
import { getNUT } from "../services/debounceSearchAxios"; 

function DebounceSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(()=>{
    const delayDebounce=setTimeout(()=>{
        if (search.trim()!==''){
            fetchData();
        }
        else{
            setData(null);
            setError('')
        }
    },500);
    return ()=>clearTimeout(delayDebounce)
  })

  

  const fetchData = async () => {
    try {
      const resp = await getNUT(search);
      console.log(resp.data);
      if (resp.data && resp.data.length > 0) {
        setData(resp.data[0]); 
        setError("");
      } else {
        setData(null);
        setError("No food data found.");
      }
    } catch (err) {
      console.error(err);
      setData(null);
      setError("Failed to fetch data.");
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-center gap-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-red-700 p-4 w-96 rounded-bl-2xl text-white rounded-tr-2xl mt-12"
          placeholder="Search the Food"
          type="text"
        />
      </div>

      {error && <div className="text-red-400 text-center mt-4">{error}</div>}

      {data && (
        <div className="bg-blue-600 text-white p-4 mt-4 text-center rounded-xl">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p>Calories: {data.calories}</p>
          <p>Protein: {data.protein_g}g</p>
          <p>Carbs: {data.carbohydrates_total_g}g</p>
          <p>Fat: {data.fat_total_g}g</p>
        </div>
      )}
    </div>
  );
}

export default DebounceSearch;