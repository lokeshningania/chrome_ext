function fetchquote(){
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        document.getElementById('quotetext').innerHTML = data.quotes[0].text
    })
}

fetchquote()