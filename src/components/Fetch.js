const Fetch = (url) => {

    return ( 
        fetch(url)
        .then(response => response.json())
        .then((json) => {
            console.log(json);
            let div = ''

            for (let i in json.results) {
                let title = json.results[i].title;
                let poster_path = "https://image.tmdb.org/t/p/w500/"+json.results[i].poster_path

                if(title === undefined) title = json.results[i].original_name;

                div+="<div class='movies' id='"+title+"' style='max-width: 100%; padding: 8px; '><img src="+poster_path+" width='200px' height='300px' min-width='200px' min-height='300px' style=' display:block; justify-content: center; overflow:hidden; cursor: pointer;'/><a color: black;'>"+title+"</a></div>"
                console.log(title);
            }
            
            document.getElementById('results').innerHTML=div;
            document.getElementsByClassName('movies')
        })
        .catch((error) => {
            console.log(error)
        })
    );
}

export default Fetch;