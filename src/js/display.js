class Display{


  element(element,entity){
    this.answer = [];
        this.answer.push(element);
  // console.log(element);
    //console.log(entity);
     if(entity == 'song'){
       songCard(element);
     }
     if(entity == 'album'){
      albumCard(element);
    }
    if(entity == 'musicArtist'){
      artistCard(element);
    }
    if(entity == 'musicVideo'){
      videoCard(element);
    }
    }
   


}
function songCard(element){
  let div = $("<div>",{id:"card",class:" card m-2",style:"max-width:400px;"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  let divCol = $("<div>",{id:"divCol",class:"mt-5 col-lg-4"});
  let divimg = $("<img>",{id:"cardImg",class:"card-img",src:element.artworkUrl100});
  //let fav = $("<i>",{class:"fa fa-star fa-4x"});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let cardInfo = $("<p>",{id:"cardInfo",class:"card-text"}).html(element.trackName);
  let cardDate = $("<p>",{id:"cardDate",class:"card-text"});
  let smallDate = $("<small>",{id:"smallDate",style:"color:black;"}).html('Release Date: '+ element.releaseDate.substring(0,10));
  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCol);
  $(divCol).append(divimg);
  //$(divCol).append(fav);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(cardInfo);
  $(divCardBody).append(cardDate);
  $(cardDate).append(smallDate);


}
function albumCard(element){
  let div = $("<div>",{id:"card",class:" card m-2",style:"max-width:350px;"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  let divCol = $("<div>",{id:"divCol",class:"mt-5 col-lg-4"});
  let divimg = $("<img>",{id:"cardImg",class:"card-img",src:element.artworkUrl100});
  //let fav = $("<i>",{class:"fa fa-star fa-4x"});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let collectionName = $("<p>",{id:"collection",class:"card-text"}).html(element.collectionName);
  let collectionPrice = $("<p>",{id:"collection",class:"card-text"}).html('Price: '+element.collectionPrice+'$');
  let collectionGenere = $("<p>",{id:"collection",class:"card-text"}).html('Type: '+element.primaryGenreName);
  let trackInfo = $("<p>",{id:"cardInfo",class:"card-text"}).html('Number of track: '+element.trackCount);
  let cardDate = $("<p>",{id:"cardDate",class:"card-text"});
  let smallDate = $("<small>",{id:"smallDate",style:"color:black;"}).html('Release Date: '+element.releaseDate);
  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCol);
  $(divCol).append(divimg);
  //$(divCol).append(fav);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(collectionName);
  $(divCardBody).append(trackInfo);
  $(divCardBody).append(collectionPrice);
  $(divCardBody).append(collectionGenere);
  $(divCardBody).append(cardDate);
  $(cardDate).append(smallDate);
}
function artistCard(element){
  let div = $("<div>",{id:"card",class:" card m-2",style:"max-width:350px;"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  //let fav = $("<i>",{class:"fa fa-star fa-4x"});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let cardInfo = $("<p>",{id:"cardInfo",class:"card-text"}).html(element.primaryGenreName);
  let smallDate = $("<a>",{id:"smallDate"}).html(element.artistLinkUrl);
  $("#conCard").append(div);
  $(div).append(row);
  //$(divCol).append(fav);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(cardInfo);
  $(divCardBody).append(smallDate);


}
function videoCard(element){
  let div = $("<div>",{id:"card",class:" card m-2",style:"max-width:350px;"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  let divCol = $("<div>",{id:"divCol",class:"mt-5 col-lg-4"});
  let divimg = $("<img>",{id:"cardImg",class:"card-img",src:element.artworkUrl100});
  //let fav = $("<i>",{class:"fa fa-star fa-4x"});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let videoName = $("<p>",{id:"collection",class:"card-text"}).html(element.trackName);
  let trackPrice = $("<p>",{id:"collection",class:"card-text"}).html('Price: '+element.trackPrice+'$');
  let collectionGenere = $("<p>",{id:"collection",class:"card-text"}).html('Type: '+element.primaryGenreName);
  let trackUrl = $("<p>",{id:"cardInfo",class:"card-text"}).html('Number of track: '+element.trackViewUrl);
  let cardDate = $("<p>",{id:"cardDate",class:"card-text"});
  let smallDate = $("<small>",{id:"smallDate",style:"color:black;"}).html('Release Date: '+element.releaseDate);
  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCol);
  $(divCol).append(divimg);
  //$(divCol).append(fav);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(videoName);
  $(divCardBody).append(trackUrl);
  $(divCardBody).append(trackPrice);
  $(divCardBody).append(collectionGenere);
  $(divCardBody).append(cardDate);
  $(cardDate).append(smallDate);
}
let display = new Display;
export default display;