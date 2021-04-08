import React, {useRef} from 'react';

const Search = ({search}) => {

    const searchVal = useRef();

    return (<React.Fragment>
                <input type="text" placeholder="Enter a city..." ref={searchVal} className="searchDiv"/>
                <button onClick={() => search(searchVal.current.value)} className="searchBtn"> Search </button>        
            </React.Fragment>);
}

export default Search;