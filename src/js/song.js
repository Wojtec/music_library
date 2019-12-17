
 class Song{
  
    constructor(artistName,trackName,releaseDate){
        this.artistName = artistName,
        this.trackName = trackName,
        this.releaseDate = releaseDate

    }
  
     

}

Song.prototype.name = function () {
    console.log(this.artistName);
}



export default Song;