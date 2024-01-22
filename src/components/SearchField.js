import * as React from 'react';
import { useEffect,useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

export default function SearchField({people}) {
    const [searchInput, setSearchInput] = useState('')
    const [filteredResults, setFilteredResults] = useState([]);
    
    useEffect(() => {
        const filteredData = people.filter((item) => {
            return Object.values(item.name)
                .join("")
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            });
            setFilteredResults(filteredData);
    }, [people, searchInput]);
    
    const RenderSearchResult = () => {
        return searchInput.length > 0 ? 
            (filteredResults.map((item, i) => {
                return (
                    <div className="search-result" key={i}>
                        {item.name}
                    </div>
                )}
            )) : '' 
    }

    return  (
        <div className="input-field">
            <DebounceInput type="search" 
                debounceTimeout={500}
                placeholder='Начните вводить имя'
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}/>

            <div className={'dropdown-content' + ((searchInput.length > 0 && filteredResults.length > 0) ? ' show' : '' )}>
                <RenderSearchResult></RenderSearchResult>
            </div>
        </div>
    )
}

