
var api = {
    
    getData(){
        var url1 = 'http://iksman.com/applets/api/robbie.json';
        var url = "http://iksman.com/applets/api/robbie.json";
        return fetch(url).then((result) => result.json());
    }
}

module.exports = api;