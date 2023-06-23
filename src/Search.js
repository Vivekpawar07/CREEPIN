import React from 'react'
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div class="wrap">
   <div class="search">
      <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
      <button type="submit" class="searchButton">
        <SearchIcon />
     </button>
   </div>
</div>
  )
}

export default Search;
