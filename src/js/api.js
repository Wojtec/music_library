import Song from './song.js';
import MusicV from './musicV.js';
import display from './display.js';
import Artist from './artist.js';
import Album from './album.js';
import getCountry from './countryAPI.js';

$('document').ready(function () {

    getCountry();
   

    $("#range").change(function(){
        $("#range0").html(this.value);
    });


    

    $("#btn").click(function () {
        let selectValu = $("#sel1").val().toLowerCase();
        let textValu = $("#search").val().toLowerCase();
        let country = $("#sel2").val();
        let explicit = $("#sel3").val();

// validation
        let val = $("#search").val();
        if(val.length == 0){

            $("#search").addClass('invalid');
        }
        else{
            $("#search").removeClass('invalid');

        }


        if(explicit == '--Yes--'){
            explicit = 'Yes';
        }
        if(explicit == '--No--'){
            explicit = 'No';
        }
        if(country == '--Select--'){
            country = 'PL';
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
        getData(textValu,selectValu,country,explicit);
    })
})





function getData(term,entity,country,explicit) {
    $.ajax({
        url: "https://itunes.apple.com/search?",
        data: {
            "explicit": explicit,
            "limit": 5,
            "country": country,
            "term": term,
            "entity": entity,
        },
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            const results = data.results;
            const resultCount = data.resultCount;
            console.log(explicit
                );
            getInfoSong(results,entity);
            getInfoArtist(results,entity);
            getInfoAlbum(results,entity);
            getInfoMusicV(results,entity);
        }
    })
}
// Function for get informations about Song.
function getInfoSong(test,entity) {
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
function getInfoArtist(test,entity) {
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
function getInfoAlbum(test,entity) {
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
function getInfoMusicV(test,entity) {
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