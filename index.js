const API_KEY = "2f515fc504e3f50e398af0511739efa3";
const URL = "https://api.themoviedb.org/3/movie/";

var list = document.getElementById('list');
list.addEventListener('click', function(e){
    var ID;
    ID = e.target.getAttribute("href");
    ID = ID.slice(1);
    gettingMovie(ID)
});
var gettingMovie = async ID =>{
    const url = await fetch(`${URL}${ID}?api_key=${API_KEY}`);
    const data = await url.json();
    document.getElementById("listMovie").style.display = "none";
    document.getElementById("info").style.display = "block";
    document.getElementById('title').innerHTML = data.title;
    document.getElementById('description').innerHTML = data.overview;
    document.getElementById('image').src = "https://image.tmdb.org/t/p/w500" + data.poster_path;
    for(var i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        a.innerHTML = data_rec.results[i].original_title;
    }
}
function search(){
    show();
    var count = 0;
    var k = document.getElementById("inp");
    var filter = k.value.toUpperCase();
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");
    for(var i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            count++;
        }
        else{
            li[i].style.display = 'none';
        }
    }
}
function show(){
    if (listMovie.style.display === "none"){
        listMovie.style.display = "block";
        filmInfo.style.display = "none";
    }
}
