import React from 'react'


function SearchBar({setCity,city,handleSearch}){
  return (
    <div className='search-bar'>
        <input
        type='text'
        value={city}
        placeholder='enter a city'
        onChange={(event)=>setCity(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}


export default SearchBar;


