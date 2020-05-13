import React from 'react';
import '../styles/search.css';
import GenreCard from './GenreCard';

const Search = () => {
    return (
        <div className="search-container">
            <div className="search-wrapper">
                <h1>Explorar todo</h1>
                <div id="search-genres">
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                </div>
            </div>
        </div>
    );
};

export default Search;
