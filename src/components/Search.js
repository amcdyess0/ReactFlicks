import Fetch from './Fetch';
import { useState } from 'react';

const Search = () => {
    let pageNum = 1;
    const [term, setTerm] = useState('')

    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=ad28aee8d3082cba2841abd59dd79b78';
    const url2 = 'https://api.themoviedb.org/3/search/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&page='+pageNum+'&include_adult=false&query='+term;
    
    const handleChange = event => {
        setTerm(event.target.value);
    };
    
    function useFetch(){ 
        if(term===''){
            Fetch(url)
        } else {
            Fetch(url2)
        }
    }

    return (
        <div className="search">
            <div><h1>Search</h1></div>
            <div><input type='text' className='searchBar' id='searchBar' placeholder="enter a title" onChange={handleChange}/></div><br></br>
            <div id="results" className="results" onChange={useFetch()}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    if(term === ''){
                        Fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ad28aee8d3082cba2841abd59dd79b78');
                        document.getElementById('results').scrollTo(0,0);
                    } else {
                        pageNum--;
                        if(pageNum === 0) pageNum = 1;
                        Fetch('https://api.themoviedb.org/3/search/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&page='+pageNum+'&include_adult=false&query='+term);
                        document.getElementById('results').scrollTo(0,0);
                    }
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    if(term === ''){
                        Fetch('https://api.themoviedb.org/3/trending/all/day?api_key=ad28aee8d3082cba2841abd59dd79b78');
                        document.getElementById('results').scrollTo(0,0);
                    } else {
                        pageNum++;
                        if(pageNum === 0) pageNum = 1;
                        Fetch('https://api.themoviedb.org/3/search/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&page='+pageNum+'&include_adult=false&query='+term);
                        document.getElementById('results').scrollTo(0,0);
                    }
                }}>Next</button>
            </div>
        </div>    
    );
}
 
export default Search;