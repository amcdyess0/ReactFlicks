import Fetch from './Fetch';
import { useState } from 'react';

const Search = () => {
    let pageNum = 1;
    const [term, setTerm] = useState('')

    const url = 'API_KEY';
    const url2 = 'APIKEY';
    
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
                        Fetch('API_KEY');
                        document.getElementById('results').scrollTo(0,0);
                    } else {
                        pageNum--;
                        if(pageNum === 0) pageNum = 1;
                        Fetch('API_KEY'+term);
                        document.getElementById('results').scrollTo(0,0);
                    }
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    if(term === ''){
                        Fetch('API_KEY');
                        document.getElementById('results').scrollTo(0,0);
                    } else {
                        pageNum++;
                        if(pageNum === 0) pageNum = 1;
                        Fetch('API_KEY'+term);
                        document.getElementById('results').scrollTo(0,0);
                    }
                }}>Next</button>
            </div>
        </div>    
    );
}
 
export default Search;
