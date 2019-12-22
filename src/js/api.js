import Song from './song.js';
import MusicV from './musicV.js';
import display from './display.js';
import Artist from './artist.js';
import Album from './album.js';
import getCountry from './countryAPI.js';
$('document').ready(function (){
    let selectValu = null;
    let textValu = null;
    let country = null;
    let explicit = null;
    let range = null;
    // console.log(localStorage.length);
    getData("michael", "song", country, explicit, 25);

    getCountry();
    $("#range").change(function () {
        $("#range0").html(this.value);
        setTimeout(function(){
            $("#conCard").html("");
        },1);
        getData(textValu,selectValu, country,explicit,this.value);
    });
    $("#sel2").change(function () {
        $("#conCard").html("");

        getData(textValu,selectValu,this.value,explicit,range);

    });
    $("#sel3").change(function () {
        $("#conCard").html("");

        getData(textValu,selectValu,country,this.value,range);
        console.log(this.value);

    });
    

    $("#btn").click(function () {
        $("#conCard").html("");
        selectValu = $("#sel1").val().toLowerCase();
        textValu = $("#search").val().toLowerCase();
        country = $("#sel2").val();
        explicit = $("#sel3").val();
        range = $("#range").val();


        // validation
        let val = $("#search").val();
        if (val.length == 0) {
            $("#search").addClass('invalid');
        } else {
            $("#search").removeClass('invalid');
        }

       


        if (explicit == '--Select--') {
            explicit = 'Yes';
        }
        if (country == '--Select--') {
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
        getData(textValu, selectValu, country, explicit, range);
        $("#search").val("");
    })

  
    
})

    
function getData(term, entity, country, explicit, range) {
    $.ajax({
        url: "https://itunes.apple.com/search?",
        data: {
            "explicit": explicit,
            "limit": range,
            "country": country,
            "term": term,
            "entity": entity,
        },
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            const results = data.results;
            const resultCount = data.resultCount;
            console.log(data);
            getInfoSong(results, entity);
            getInfoArtist(results, entity);
            getInfoAlbum(results, entity);
            getInfoMusicV(results, entity);
        }
    })
};

// Function for get informations about Song.
function getInfoSong(test, entity) {

    if (entity == 'song') {
        test.forEach(function atribute(item) {
            const song = new Song(item.artistName,
                item.trackName,
                item.releaseDate,
                item.artworkUrl100, );
            //console.log(song.artworkUrl100);
            display.element(song,entity); 
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
            display.element(artist, entity);
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
            display.element(album, entity);

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
            display.element(musicV, entity);
        })
    }
}