import Fetch from "./Fetch";

const TopMovies = () => {
    let pageNum =1;
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&with_watch_monetization_types=flatrate';
    
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
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&with_watch_monetization_types=flatrate');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Previous</button><div className='space'></div>
                <button className='btn2' onClick={() => {
                    pageNum++;
                    Fetch('https://api.themoviedb.org/3/discover/movie?api_key=ad28aee8d3082cba2841abd59dd79b78&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum+'&with_watch_monetization_types=flatrate');
                    document.getElementById('results').scrollTo(0,0); 
                }}>Next</button>
            </div>
        </div>
    );
}
 
export default TopMovies;