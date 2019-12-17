 
 export default function getCountry() {
 $.ajax({
    "async": true,
	"crossDomain": true,
	"url": "https://restcountries-v1.p.rapidapi.com/all",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "5tCHtG27Whmsh1VlJXVPtO5J3jslp1VU3bQjsnuIbIJMIznue0"
	},
     type: "GET",
      dataType: "json",
     success: function (data) {
        const results = data;
        getCountryName(results);
    }
 })
 }
class Country {
    constructor(name,nameIso){
        this.name = name;
        this.nameIso = nameIso;
    }
}
function getCountryName(name) {
    name.forEach(function name(item) {
        const country = new Country(item.name,item.alpha2Code);
        let arrayCountry = [];
        arrayCountry.push(country);
        pushName(arrayCountry);
        getIso(arrayCountry);
    })
    
}
export function getIso(item,country){
console.log(country);

}
function pushName(name) {
    name.forEach(function push(item) {
       let ele = $("<option></option>").text(item.name);
        $("#sel2").append(ele);
    })
    
}
