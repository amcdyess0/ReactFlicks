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
                    <p className='button' id={props.genreList[0]} onClick={() => setPage(props.genreComponents[0])}>Action</p>
                    <p className='button' id={props.genreList[1]} onClick={() => setPage(props.genreComponents[1])}>Comedy</p>
                    <p className='button' id={props.genreList[2]} onClick={() => setPage(props.genreComponents[2])}>Documentary</p>
                    <p className='button' id={props.genreList[3]} onClick={() => setPage(props.genreComponents[3])}>Drama</p>
                    <p className='button' id={props.genreList[4]} onClick={() => setPage(props.genreComponents[4])}>Family</p>
                </div>
                <div className="links">
                    <p><b>About</b></p>
                    <p className='button' id='link'><a href='https://github.com/amcdyess0'>Github</a></p>
                    <p className='button' id='link'><a href='https://amcdyess0.github.io/'>Portfolio</a></p>
                    <p className='button' id='link'><a href='https://amcdyess0.github.io/'>Description</a></p>
                </div>
            </div>
            <div id='main' className="main">
                <div>
                    {page}
                </div>
            </div>
        </div>
    );
}
 
export default UI;