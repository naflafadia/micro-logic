/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ButtonHome from '../components/ButtonHome';

const MobileLegend = () => {
  const [heroes, setHeroes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.dazelpro.com/mobile-legends/hero');
      setHeroes(response.data.hero);
      setSearchResults(response.data.hero); // Isi searchResults dengan semua data hero
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredHeroes = heroes.filter(hero =>
      hero.hero_name.toLowerCase().includes(searchInput.toLowerCase()) ||
      hero.hero_role.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredHeroes);
  };

  const renderHeroes = () => {
    return searchResults.map(hero => (
      <div key={hero.hero_id} className="border border-solid border-1 border-black mt-4 rounded-md shadow-sm shadow-slate-600">
        <div className="p-3">
          <h4 className="font-bold">{hero.hero_name}</h4>
          <h5 className="text-sm font-thin">Peran: {hero.hero_role}</h5>
          <h5 className="text-sm font-thin">Kemampuan Khusus: {hero.hero_specially}</h5>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Navbar />
      <ButtonHome to='/' />
      <div className="flex flex-col items-center mb-5">
        <div className="bg-slate-400 w-2/4 rounded-md shadow-md shadow-slate-600">
          <div className="p-5">
            <h1 className="font-semibold text-xl text-center mb-6">Featuring Mobile Legend Heroes</h1>
            <h3 className="mb-2 font-medium">List of heroes</h3>
            <div className="flex gap-3">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-slate-200 w-2/4 rounded-md"
              />
              <button
                onClick={handleSearch}
                className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm"
              >
                Search
              </button>
              <button
                onClick={() => {
                  setSearchInput('');
                  setSearchResults(heroes); // Reset searchResults ke semua data hero
                }}
                className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm"
              >
                Reset
              </button>
            </div>
            <div className="p-3">
              {searchResults.length > 0 ? (
                renderHeroes()
              ) : (
                <p className="text-center">No heroes found. Please try a different search.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLegend;

