const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_S7PW7IuCVSwEaXUes1rF8DpT8hA3v8J1bEppD5P0YwFTV5MD3eb6VjnszUZY7oF7';
const API_URL_FAVOURITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=live_S7PW7IuCVSwEaXUes1rF8DpT8hA3v8J1bEppD5P0YwFTV5MD3eb6VjnszUZY7oF7';
const spanError = document.getElementById('error');

async function loadRandomMichis () {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log("Random");
    console.log(data);

    if (res.status!== 200){
        spanError.innerHTML="Error: " + res.status +  data.message;
    }else{
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
    
        img1.src = data[0].url;
        img2.src = data[1].url;
    }

    
}

async function loadFavoriteMichis () {
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    console.log("favs");
    console.log(data);
    if (res.status!== 200){
        spanError.innerHTML="Error: " + res.status + data.message;
    }else{

    }


    
}

async function saveFavouriteMichi(){
    const res = await fetch();
    
}

loadFavoriteMichis();
loadRandomMichis();
