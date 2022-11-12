import React, { useState } from "react"

const SearchBar = props => {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault()
    props.fetchVideoData(search)
    setSearch("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search'></input>
            <button type='submit'>Search</button>
            </form>
        </div>

    )
    

}

export default SearchBar