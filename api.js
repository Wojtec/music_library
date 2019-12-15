import Song from './song.js';
import MusicV from './musicV.js';
import display from './display.js';
import Artist from './artist.js';
import Album from './album.js';

 export function getData(term, entity) {
    $.ajax({
        url: "https://itunes.apple.com/search?",
        data: {
            "term": term,
            "entity": entity,
        },
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            const results = data.results;
            const resultCount = data.resultCount;
            console.log(results);
            getInfoSong(results,entity);
            getInfoArtist(results,entity);
            getInfoAlbum(results,entity);
            getInfoMusicV(results,entity);
        }
    })
}
// Function for get informations about Song.
function getInfoSong(test, entity) {
    if (entity == 'song') {
        test.forEach(function atribute(item) {
            display.element(new Song(
                item.artistName,
                item.trackName,
                item.releaseDate
            ))

        })
    }
}
// Function for get informations about Artist.
function getInfoArtist(test,entity){
    if(entity == 'musicArtist'){
        test.forEach(function atribute(item){
            display.element(new Artist(
                item.artistName,
                item.primaryGenreName,
                item.artistLinkUrl
            ))

        })
    }
}
//Function for get information about Album.
function getInfoAlbum(test,entity){
    if(entity == "album"){
        test.forEach(function atribute(item){
            display.element(new Album(
                item.artistName,
                item.trackCount,
                item.collectionPrice,
                item.releaseDate,
                item.primaryGenreName,
                item.collectionName,
                item.artworkUrl100
            ))
        })
    }
}
//Function for get information about music video.
function getInfoMusicV(test,entity){
    if(entity == 'musicVideo'){
        test.forEach(function atribute(item){
            display.element(new MusicV(
            item.artworkUrl100,
            item.artistName,
            item.trackName,
            item.trackTimeMillis,
            item.releaseDate,
            item.primaryGenreName,
            item.trackPrice,
            item.trackViewUrl,
            item.previewUrl
            ))
        })
    }
}
 getData("michael", "musicVideo");