import Song from './song.js';
import MusicV from './musicV.js';
import display from './display.js';
import Artist from './artist.js';
import Album from './album.js';
import getCountry from './countryAPI.js';
import getIso from './countryAPI.js';

$('document').ready(function () {
    getCountry();
    $("#btn").click(function () {
        let selectValu = $("#sel1").val().toLowerCase();
        let textValu = $("#search").val().toLowerCase();
        let selectCountry = $("#sel2").val().toLowerCase();
        if(selectCountry == "--select--"){
            selectCountry = null;
        }
        if(selectCountry !== null){
            sendCountry(selectCountry);
        }
      function  sendCountry(nameCountry){
          getIso(nameCountry);
        }
        if (selectValu == 'song') {
            selectValu = 'song';
        }
        if (selectValu == 'album') {
            selectValu = 'album';
        }
        if (selectValu == 'artist') {
            selectValu = 'musicArtist';
        }
        if (selectValu == 'music video') {
            selectValu = 'musicVideo';
        }
        console.log(textValu);
        getData(textValu, selectValu);
    })
})





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
            getInfoSong(results, entity);
            getInfoArtist(results, entity);
            getInfoAlbum(results, entity);
            getInfoMusicV(results, entity);
        }
    })
}
// Function for get informations about Song.
function getInfoSong(test, entity) {
    if (entity == 'song') {
        test.forEach(function atribute(item) {
            const song = new Song(item.artistName,
                item.trackName,
                item.releaseDate);
                display.element(song);
        })
    }
}

// Function for get informations about Artist.
function getInfoArtist(test, entity) {
    if (entity == 'musicArtist') {
        test.forEach(function atribute(item) {
         const artist = new Artist(item.artistName,
            item.primaryGenreName,
            item.artistLinkUrl);
            display.element(artist);
        })
    }
}
//Function for get information about Album.
function getInfoAlbum(test, entity) {
    if (entity == 'album') {
        test.forEach(function atribute(item) {
          const album = new Album(item.artistName,
            item.trackCount,
            item.collectionPrice,
            item.releaseDate,
            item.primaryGenreName,
            item.collectionName,
            item.artworkUrl100);
            display.element(album);

        })
    }
}
//Function for get information about music video.
function getInfoMusicV(test, entity) {
    if (entity == 'musicVideo') {
        test.forEach(function atribute(item) {
          const musicV = new MusicV(item.artworkUrl100,
            item.artistName,
            item.trackName,
            item.trackTimeMillis,
            item.releaseDate,
            item.primaryGenreName,
            item.trackPrice,
            item.trackViewUrl,
            item.previewUrl);
            display.element(musicV);
        })
    }
}