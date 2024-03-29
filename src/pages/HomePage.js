import React, { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';

function HomePage({ allData, clickedCountry }) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedValue, setSelectedValue] = useState('All');
  const [searchedData, setSearchedData] = useState(allData);

  useEffect(() => {
    switch (selectedValue) {
      case 'All':
        return setSearchedData(allData);
      case 'Asia':
        return setSearchedData(
          allData.filter((data) => data.region === 'Asia')
        );
      case 'Europe':
        return setSearchedData(
          allData.filter((data) => data.region === 'Europe')
        );
      case 'Africa':
        return setSearchedData(
          allData.filter((data) => data.region === 'Africa')
        );
      case 'Americas':
        return setSearchedData(
          allData.filter((data) => data.region === 'Americas')
        );
      case 'Oceania':
        return setSearchedData(
          allData.filter((data) => data.region === 'Oceania')
        );
      case 'Polar':
        return setSearchedData(
          allData.filter((data) => data.region === 'Polar')
        );
      default:
        return setSearchedData(allData);
    }
  }, [selectedValue, allData]);

  const handleRegion = (e) => {
    let value = e.target.value;
    setSelectedValue(value);
  };

  const handleSearch = () => {
    setSearchedData(allData);
    if (searchInput.trim()) {
      const userSearched = searchedData.filter((dat) => {
        return dat.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchedData(userSearched);
      setSearchInput('');
    } else {
      setSearchedData(allData);
    }
  };

  return (
    <div className="homepage">
      <div className="homepage__search">
        <div className="homepage__search-input">
          <input
            placeholder="Search for Country..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="homepage__search-select">
          <label htmlFor="region">Filter by region</label>
          <select
            id="region"
            name="region"
            value={selectedValue}
            onChange={handleRegion}
          >
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
            <option value="Polar">Polar</option>
          </select>
        </div>
      </div>
      <div>
        <CountryList allData={searchedData} clickedCountry={clickedCountry} />
      </div>
    </div>
  );
}

export default HomePage;
