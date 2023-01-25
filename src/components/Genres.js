import Fetch from "./Fetch";

function useFetch(url) {
    Fetch(url)
}

export const Action = () => {
    let pageNum = 1;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=28';

    return ( 
        <div className="Genres">
            <h1>Action</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=28');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=28');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Comedy = () => {
    let pageNum = 1;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=35';
    return ( 
        <div className="Genres">
            <h1>Comedy</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=35');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=35');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Documentary = () => {
    let pageNum = 1;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=99';
    return ( 
        <div className="Genres">
            <h1>Documentary</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=99');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=99');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Drama = () => {
    let pageNum =1;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=18';
    return ( 
        <div className="Genres">
            <h1>Drama</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=18');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=18');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Family = () => {
    let pageNum = 1;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&&with_genres=10751';
    return ( 
        <div className="Genres">
            <h1>Family</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=10751');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&&with_genres=10751');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}