import React from 'react';

const SearchBar = ({searchApi})=> {

    const handleSubmit = (evt) => {
        evt.preventDefault()
        searchApi(evt.target.searchItem.value)
    }

    return(
        <div>
            
            <form id="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" name="searchItem" />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;