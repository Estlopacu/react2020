import React from 'react';
import "./search.scss";

type PropType = {
    setCharacterName: Function;
}

const Search = ({setCharacterName} : PropType) => {
    const setSearchText = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCharacterName(e.target.value);
    }

    return (<div className="search">
        <form action="#">
            <input type="text" placeholder="Search here" onChange={setSearchText}/>
        </form>
    </div>);
}

export default Search;
