import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm, onSearch }) => {
    return (
        <div className='search-bolck'>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies..."
            />
            <button className='btn search' onClick={onSearch}>Search</button>
        </div>
    );
};
