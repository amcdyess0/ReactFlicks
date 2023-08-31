import Fetch from "./Fetch";

function useFetch(url) {
    Fetch(url)
}

export const Action = () => {
    let pageNum = 1;
    const url = 'API_KEY';

    return ( 
        <div className="Genres">
            <h1>Action</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Comedy = () => {
    let pageNum = 1;
    const url = 'API_KEY';
    return ( 
        <div className="Genres">
            <h1>Comedy</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Documentary = () => {
    let pageNum = 1;
    const url = 'API_KEY';
    return ( 
        <div className="Genres">
            <h1>Documentary</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Drama = () => {
    let pageNum =1;
    const url = 'API_KEY';
    return ( 
        <div className="Genres">
            <h1>Drama</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}

export const Family = () => {
    let pageNum = 1;
    const url = 'API_KEY';
    return ( 
        <div className="Genres">
            <h1>Family</h1>
            <div id="results" className="results" onChange={useFetch(url)}></div><br></br>
            <div className="mainBottom">
                <button className='btn2' onClick={() => {
                    pageNum--;
                    if(pageNum === 0) pageNum = 1;
                    Fetch('API_KEY');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('API_Key');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}
