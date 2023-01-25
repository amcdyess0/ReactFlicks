import Search from './Search';
import TopMovies from './TopMovies';
import React, { useState } from 'react';
import {Action, Comedy, Documentary, Drama, Family} from './Genres.js';

const UI = (props) => {
    const [page, setPage] = useState(<Search></Search>);
    props = {
        genreList: ['Action', 'Comedy', 'Documentary', 'Drama', 'Family'],
        genreComponents: [<Action></Action>, <Comedy></Comedy>, <Documentary></Documentary>, <Drama></Drama>, <Family></Family>]
    }

    function listGenres() {
        for(let i = 0; i < 5; i++){
            let newPage = props.genreComponents[i];
            <p className='button' id={props.genreList[i]} onClick={() => setPage(newPage)}>Action</p>
        }
    }

    return ( 
        <div className="container">
            <div className="sidebar">
                <div><h1>Movies</h1></div>
                <div className="discover">
                    <p><b>Discover</b></p>
                    <p className='button' onClick={() => setPage(<Search></Search>)}>Search</p>
                    <p className='button' onClick={() => setPage(<TopMovies></TopMovies>)}>Top Movies</p>
                </div>
                <div className="genres">
                    <p><b>Genres</b></p>
                    {listGenres}
                </div>
                <div className="links">
                    <p><b>About</b></p>
                    <p className='button' id='link'><a href='https://github.com/amcdyess0'>Github</a></p>
                    <p className='button' id='link'><a href='https://amcdyess0.github.io/'>Portfolio</a></p>
                    <p className='button' id='link'><a href='https://amcdyess0.github.io/'>Description</a></p>
                </div>
            </div>
            <div id='main' className="main">
                {page}
            </div>
        </div>
    );
}
 
export default UI;