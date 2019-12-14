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


export default function control(term, entity) {
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
            console.log(results, 'song');
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






    
}




control("michael", "song");