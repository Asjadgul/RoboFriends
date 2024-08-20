import React from "react";
const SearchBox = ({searchfield, onSearch}) => {
    return (
        <div className="pa2">
        <input
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search Robots"
        type="search" 
        onChange={onSearch}
        />
        </div>
    )
}
export default SearchBox;