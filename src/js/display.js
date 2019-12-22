let i=0;

class Display{
  element(element,entity){
     if(entity == 'song'){
       songCard(element,entity);
     }
     if(entity == 'album'){
      albumCard(element,entity);
    }
    if(entity == 'musicArtist'){
      artistCard(element,entity);
    }
    if(entity == 'musicVideo'){
      videoCard(element,entity);
    }
    }
}       
//################## BUTTON FAVORITE CLICK ############ 
    $(document).on('click',".btn-fav",function(){
      let t = $(this).attr('t');
      let entity = $(this).attr('entity');
      // IF ENTITY IS SONG
      if(entity == 'song'){
        let items = {
          title : $(this).siblings().find(".card-title").html(),
          track : $(this).siblings().find(".card-text").html(),
          date : $(this).siblings().find(".card-date").html(),
        }
        //NUMBER OF COUNTER i
        let we = ("items"+t);
        //LOCALSOTORAGE
        localStorage.setItem(we,JSON.stringify(items));
        //GET LOCALSTORAGE
        let ite = JSON.parse(localStorage.getItem(we));
        //CALLBACK
        setItem(ite,t,entity);
      }
         // IF ENTITY IS ALBUM
      if(entity == 'album'){
        let items = {
          title : $(this).siblings().find(".card-title").html(),
          date : $(this).siblings().find(".card-date").html(),
          price : $(this).siblings().find(".card-price").html(),
          type : $(this).siblings().find(".card-type").html(),
          numTrack : $(this).siblings().find(".num-track").html(),
        }
         //NUMBER OF COUNTER i
          let we = ("items"+t);
        //LOCALSOTORAGE
          localStorage.setItem(we,JSON.stringify(items));
         //GET LOCALSTORAGE
          let ite = JSON.parse(localStorage.getItem(we));
         //CALLBACK  
         setItem(ite,t,entity);
         }
         // IF ENTITY IS musicArtist
         if(entity == 'musicArtist'){
          let items = {
            title : $(this).siblings().find(".card-title").html(),
            type : $(this).siblings().find(".card-type").html(),
            url : $(this).siblings().find(".url").html(),
          }
          //NUMBER OF COUNTER i
            let we = ("items"+t);
            //LOCALSOTORAGE
            localStorage.setItem(we,JSON.stringify(items));
           //GET LOCALSTORAGE
            let ite = JSON.parse(localStorage.getItem(we));
          //CALLBACK 
           setItem(ite,t,entity);
           }
           // IF ENTITY IS musicVideo
           if(entity == 'musicVideo'){
            let items = {
              title : $(this).siblings().find(".card-title").html(),
              trackName : $(this).siblings().find(".card-text").html(),
              price : $(this).siblings().find(".card-price").html(),
              type : $(this).siblings().find(".card-type").html(),
              url : $(this).siblings().find(".card-url").html(),
              date : $(this).siblings().find(".card-date").html(),
            }
            //NUMBER OF COUNTER i
              let we = ("items"+t)
              //LOCALSOTORAGE
              localStorage.setItem(we,JSON.stringify(items));
             //GET LOCALSTORAGE
              let ite = JSON.parse(localStorage.getItem(we));
            //CALLBACK
             setItem(ite,t,entity);
             }
     });
  
  


    
    
 // FUNCTION SETITEM IS FOR DISPLAY DYNAMIC CONTENT OF FAVORITES
        function setItem(items,t,entity){
          if(entity == 'song'){
            let div = $("<div>",{id:"favDiv"+t,class:"card d-flex justify-content-center m-2 sticky-top",style:"width:300px"});
            let ul = $("<ul>",{id:"favUl",class:"list-group list-group-flush d-flex justify-content-center m-0 p-0",style:"min-height:150px"});
            let title = $("<li>",{id:"fav0",class:"tes list-group-item",}).text(items.title);
            let track = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.track);
            let date = $("<li>",{id:"fav2",class:"list-group-item"}).text(items.date);
            let btnX = $("<button>",{id:"btnX",type:"button",class:"close",style:"width:50px"}).attr('i',t);
            let span = $("<span>",{id:"spanBtn"}).attr("aria-hidden","true").text("x");
          if($("#favDiv"+t).length);  
         else{
              $("#favtest").append(div);
              $(title).append(btnX);
              $(btnX).append(span);
              $(div).append(ul);
              $(ul).append(title);
              $(ul).append(track);
              $(ul).append(date);
             }
            }
            if(entity == 'album'){
              let div = $("<div>",{id:"favDiv"+t,class:"card d-flex justify-content-center m-2 sticky-top",style:"width:300px"});
              let ul = $("<ul>",{id:"favUl",class:"list-group list-group-flush d-flex justify-content-center m-0 p-0",style:"min-height:150px"});
              let title = $("<li>",{id:"fav0",class:"tes list-group-item",}).text(items.title);
              let track = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.numTrack);
              let price = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.price);
              let type= $("<li>",{id:"fav1",class:"list-group-item"}).text(items.type);
              let date = $("<li>",{id:"fav2",class:"list-group-item"}).text(items.date);
              let btnX = $("<button>",{id:"btnX",type:"button",class:"close",style:"width:50px"}).attr('i',t);
              let span = $("<span>",{id:"spanBtn"}).attr("aria-hidden","true").text("x");
            if($("#favDiv"+t).length);  
           else{
                $("#favtest").append(div);
                $(title).append(btnX);
                $(btnX).append(span);
                $(div).append(ul);
                $(ul).append(title);
                $(ul).append(price);
                $(ul).append(track);
                $(ul).append(type);
                $(ul).append(date);
               }
              }
              if(entity == 'musicArtist'){
                let div = $("<div>",{id:"favDiv"+t,class:"card d-flex justify-content-center m-2 sticky-top",style:"width:300px"});
                let ul = $("<ul>",{id:"favUl",class:"list-group list-group-flush d-flex justify-content-center m-0 p-0",style:"min-height:150px"});
                let title = $("<li>",{id:"fav0",class:"tes list-group-item",}).text(items.title);
                let type = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.type);
                let url = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.url);
                let btnX = $("<button>",{id:"btnX",type:"button",class:"close",style:"width:50px"}).attr('i',t);
                let span = $("<span>",{id:"spanBtn"}).attr("aria-hidden","true").text("x");
              if($("#favDiv"+t).length);  
             else{
                  $("#favtest").append(div);
                  $(title).append(btnX);
                  $(btnX).append(span);
                  $(div).append(ul);
                  $(ul).append(title);
                  $(ul).append(type);
                  $(ul).append(url);
                 }
                }
                if(entity == 'musicVideo'){
                  let div = $("<div>",{id:"favDiv"+t,class:"card d-flex justify-content-center m-2 sticky-top",style:"width:300px"});
                  let ul = $("<ul>",{id:"favUl",class:"list-group list-group-flush d-flex justify-content-center m-0 p-0",style:"min-height:150px"});
                  let title = $("<li>",{id:"fav0",class:"tes list-group-item",}).text(items.title);
                  let type = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.type);
                  let trackName = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.trackName);
                  let price = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.price);
                  let date = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.date);
                  let url = $("<li>",{id:"fav1",class:"list-group-item"}).text(items.url);
                  let btnX = $("<button>",{id:"btnX",type:"button",class:"close",style:"width:50px"}).attr('i',t);
                  let span = $("<span>",{id:"spanBtn"}).attr("aria-hidden","true").text("x");
                if($("#favDiv"+t).length);  
               else{
                    $("#favtest").append(div);
                    $(title).append(btnX);
                    $(btnX).append(span);
                    $(div).append(ul);
                    $(ul).append(title);
                    $(ul).append(trackName);
                    $(ul).append(price);
                    $(ul).append(type);
                    $(ul).append(url);
                    $(ul).append(date);

                   }
                  }
        }

        $(document).on("click",".close",function(){
          let i = $(this).attr("i");
          $("#favDiv"+i).remove();
        })

       



 function songCard(element,entity){

  let div = $("<div>",{id:("card"),class:"card m-2",style:"width:400px;"});
  let row = $("<div>",{id:"row",class:"p-2 d-flex align-content-center flex-wrap row no-gutters"});
  let divCol = $("<div>",{id:"divCol",class:" col-lg-4"});
  let divimg = $("<img>",{class:"p-2 card-img",src:element.artworkUrl100});
  let divCardCont = $("<div>",{id:"cardCont",class:"justify-content-center col-lg-8"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"cardT",class:"card-title",style:"text-align:center;"}).html(element.artistName);
  let cardInfo = $("<p>",{class:"card-text",style:"text-align:center;font-size:16px"}).html(element.trackName);
  let cardDate = $("<p>",{class:"card-date",style:"text-align:center;font-size:14px"}).html('Release Date: '+element.releaseDate.substring(0,10));
  let btn = $("<button>",{id:"fbtn",class:"btn-fav btn mt-auto btn-primary"}).attr('t',i).attr("entity",entity).text("Favorite");
//one way is to set the name of the button that youre clicking the artist name and get this attr later when you try to add to favourites
//the better way is to get the sibling div element value of the button that youre clicking. You can search for term childNodes() that is vanilla js or siblings() from jquery
  
  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCol);
  $(divCol).append(divimg);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(cardInfo);
  $(divCardBody).append(cardDate);
  $(div).append(btn);

  i++;

 }
 




function albumCard(element ,entity){
  let div = $("<div>",{id:"card",class:"card m-2",style:"width:400px;"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  let divCol = $("<div>",{id:"divCol",class:"mt-5 col-lg-4"});
  let divimg = $("<img>",{id:"cardImg",class:"card-img",src:element.artworkUrl100});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let collectionName = $("<p>",{id:"collection",class:"card-text"}).html(element.collectionName);
  let collectionPrice = $("<p>",{id:"collection",class:"card-text card-price"}).html('Price: '+element.collectionPrice+'$');
  let collectionGenere = $("<p>",{id:"collection",class:"card-text card-type"}).html('Type: '+element.primaryGenreName);
  let trackInfo = $("<p>",{id:"cardInfo",class:"card-text num-track"}).html('Number of track: '+element.trackCount);
  let cardDate = $("<p>",{id:"cardDate",class:"card-text card-date"}).html('Release Date: '+element.releaseDate.substring(0,10));
  let btn = $("<button>",{id:"fbtn",class:"btn-fav btn mt-auto btn-primary"}).attr('t',i).attr("entity",entity).text("Favorite");
  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCol);
  $(divCol).append(divimg);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(collectionName);
  $(divCardBody).append(trackInfo);
  $(divCardBody).append(collectionPrice);
  $(divCardBody).append(collectionGenere);
  $(divCardBody).append(cardDate);
  $(div).append(btn);
  i++;
}




function artistCard(element,entity){
  let div = $("<div>",{id:"card",class:" card m-2",style:"width:400px"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let cardInfo = $("<p>",{id:"cardInfo",class:"card-text card-type"}).html(element.primaryGenreName);
  let smallDate = $("<a>",{id:"smallDate",class:"url"}).html(element.artistLinkUrl);
  let btn = $("<button>",{id:"fbtn",class:"btn-fav btn mt-auto btn-primary"}).attr('t',i).attr("entity",entity).text("Favorite");

  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(cardInfo);
  $(divCardBody).append(smallDate);
  $(div).append(btn);
i++;

}






function videoCard(element,entity){
  let div = $("<div>",{id:"card",class:" card m-2",style:"width:400px;"});
  let row = $("<div>",{id:"row",class:"justify-content-center row"});
  let divCol = $("<div>",{id:"divCol",class:"mt-5 col-lg-4"});
  let divimg = $("<img>",{id:"cardImg",class:"card-img",src:element.artworkUrl100});
  let divCardCont = $("<div>",{id:"cardCont",class:"p-2 col-lg-6"});
  let divCardBody = $("<div>",{id:"cardBody",class:"card-body"});
  let cardTitle = $("<h5>",{id:"titleCard",class:"card-title"}).html(element.artistName);
  let videoName = $("<p>",{id:"collection",class:"card-text"}).html(element.trackName);
  let trackPrice = $("<p>",{id:"collection",class:"card-text card-price"}).html('Price: '+element.trackPrice+'$');
  let collectionGenere = $("<p>",{id:"collection",class:"card-text card-type"}).html('Type: '+element.primaryGenreName);
  let trackUrl = $("<p>",{id:"cardInfo",class:"card-text card-url"}).html('Url: '+element.trackViewUrl);
  let cardDate = $("<p>",{id:"cardDate",class:"card-text card-date"}).html('Release Date: '+element.releaseDate.substring(0,10));
  let btn = $("<button>",{id:"fbtn",class:"btn-fav btn mt-auto btn-primary"}).attr('t',i).attr("entity",entity).text("Favorite");

  $("#conCard").append(div);
  $(div).append(row);
  $(row).append(divCol);
  $(divCol).append(divimg);
  $(row).append(divCardCont);
  $(divCardCont).append(divCardBody);
  $(divCardBody).append(cardTitle);
  $(divCardBody).append(videoName);
  $(divCardBody).append(trackUrl);
  $(divCardBody).append(trackPrice);
  $(divCardBody).append(collectionGenere);
  $(divCardBody).append(cardDate);
  $(div).append(btn);
  i++;
}

 let display = new Display;

export default display;
