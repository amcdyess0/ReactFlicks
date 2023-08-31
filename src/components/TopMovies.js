import Fetch from "./Fetch";

const TopMovies = () => {
    let pageNum =1;
    const url = 'API_KEY'+pageNum;
    
    function useFetch() {
        Fetch(url)
    }

    return ( 
        <div className="topmovies">
            <div><h1>Top Movies</h1></div>
            <div id="results" className="results" onChange={useFetch()}></div><br></br>
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
 
export default TopMovies;
