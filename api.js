import Song from './song.js';
import display from './display.js';
import Artist from './artist.js';

function getData(term, entity) {
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

            getInfo(results, entity);
        }
    })
}

function getInfo(test, entity) {
    if (entity == 'song') {
        test.forEach(function atribute(item) {
            display.element(new Song(
                item.artistName,
                item.trackName,
                item.releaseDate
            ))
        })
    }
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




getData("michael", "musicArtist");