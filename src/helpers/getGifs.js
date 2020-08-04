export const getGifs = async( category ) => {
        
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=100&api_key=tOABssXIdHe3QlBdR0TSMB0aGdH8a6PW`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })

    // console.log(gifs);
    // setImages( gifs );
    return gifs;

}