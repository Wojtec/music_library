// $.ajax({
//     url:"https://itunes.apple.com/search?parameterkeyvalue",
//     data:{term: "jack",entity:"song"},
//     type:"GET",
//     dataType: "jsonp",
//     success: function(data, dataType){
//             console.log(data);
//     }

// })

import Song from './song.js';
import display from './display.js';


function control(term,entity){
$.ajax({
    url:"https://itunes.apple.com/search?",
    data:{
        "term": term,
        "entity": entity,
    },
    type: "GET",
    dataType: "jsonp",
    success: function(data){
        const results = data.results;
        console.log(results,'song');
         getInfo(results,entity);
    }
})
}

function getInfo(test,entity){
    if(entity == 'song'){
        test.forEach(function(atribute){
            display.element(new Song(
                atribute.artistName,
                atribute.trackName,
                atribute.releaseDate))

        })

        }
    




 }
control("michael","song");