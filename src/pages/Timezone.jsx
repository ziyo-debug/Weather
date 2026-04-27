import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timezone = () => {
  const [timezones, setTimezones] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://69df86a3d6de26e119297f4f.mockapi.io/Timezone")
      .then((res) => {
        setTimezones(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // filter based on input
  const filtered = timezones.filter((item) =>
    item.Timezone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-[50px] mt-10 font-extrabold">
        Timezone
      </h1>

      <form className='w-[500px] border mt-10 rounded-[6px] p-2'>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city..."
          className="w-full outline-none p-2"
        />
      </form>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {filtered.map((item, index) => (
          <section
            key={index}
            className='bg-red-600 w-[200px] h-[75px] rounded-[9px] flex items-center justify-center text-white font-semibold transition-all duration-200 hover:w-[250px]'
          >
            <h1>{item.Timezone}</h1>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Timezone;