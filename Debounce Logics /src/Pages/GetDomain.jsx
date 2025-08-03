import React, { useEffect, useState } from "react";
import { getDomain } from "../services/axiosServices";

function GetDomain() {
  const [domainTyped, setDomainTyped] = useState("");
  const [data, setData] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setDomainTyped(e);
  };
  const handleOnClick = async () => {
    try {
      const res = await getDomain(domainTyped);
      console.log(" Whois response:", res.data);

      setData(res.data);
    } catch (error) {
      console.error("Error fetching WHOIS data:", error.message);
    }
  };
  useEffect(() => {
    handleOnClick();
  }, []);

  return (
    <>
      <div className="mt-12  flex justify-center ">
        <input
          className=" bg-blue-400 p-6 rounded-l-3xl w-92 text-white shadow-2xl border-0  hover:scale-3d  "
          placeholder="Enter Domain"
          onChange={(e) => handleChange(e.target.value)}
          type="text"
        />
        <button className="bg-green-400 w-32 rounded-r-3xl  text-white shadow-2xl cursor-pointer" onClick={handleOnClick}>Get Data</button>
       
      </div>
      <div className="flex  justify-center mt-12 ">
         <ul className="bg-orange-400 p-6 w-96   text-gray-100">
          <li>{data.domain_name}</li>
          <li>{data.emails}</li>
          <li>{data.state}</li>
          <li>{data.whois_server}</li>
        </ul>
      </div>
    </>
  );
}

export default GetDomain;
