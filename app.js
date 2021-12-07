var testApi = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var minionApi = "https://api.funtranslations.com/translate/minion.json"

var input = document.querySelector("#input")

var output = document.querySelector("#output")

var translate_btn = document.querySelector("#translate")

function TranslateUrl(text){
    return minionApi + "?text=" + text;
}

function errorHandler(err){
    console.log("error occured", err);
    alert("Something wrong with server, try again after sometime")
}

function clickHandler() {
    var text = input.value;

    fetch(TranslateUrl(text))
        .then(response => response.json())
        .then(json => {
            var result = json.contents.translated;
            output.innerText = result;
        })
        .catch(errorHandler)
};

translate_btn.addEventListener("click", clickHandler)
