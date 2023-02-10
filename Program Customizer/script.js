const jsonData = [{ "buttons": "#3C3C3C", "list": "#3C3C3C", "topbar": "#3C3C3C" }];

document.getElementById("json").innerHTML = JSON.stringify(jsonData);

function Download() {
    const file = document.createElement("a");
    file.href = URL.createObjectURL(new Blob([JSON.stringify(jsonData)], { type: "text/plain" }));
    file.download = "config.json";
    file.click();
}

var div = document.querySelectorAll("div");

let buttonsColor;
var buttonsDiv = div[3];
window.addEventListener("load", buttonsChange, false);

function buttonsChange() {
    buttonsColor = document.querySelector("#buttons");
    buttonsColor.value = "#3C3C3C";
    buttonsColor.addEventListener("input", function(event) {
        buttonsDiv.style.backgroundColor = event.target.value;
        jsonData[0]["buttons"] = event.target.value;
        document.getElementById("json").innerHTML = JSON.stringify(jsonData);
    }, false);
    buttonsColor.select();
}

let listColor;
var listDiv = div[1];
window.addEventListener("load", listChange, false);

function listChange() {
    listColor = document.querySelector("#list");
    listColor.value = "#3C3C3C";
    listColor.addEventListener("input", function(event) {
        listDiv.style.backgroundColor = event.target.value;
        jsonData[0]["list"] = event.target.value;
        document.getElementById("json").innerHTML = JSON.stringify(jsonData);
    }, false);
    listColor.select();
}

let topbarColor;
var topbarDiv = div[2];
window.addEventListener("load", topbarChange, false);

function topbarChange() {
    topbarColor = document.querySelector("#topbar");
    topbarColor.value = "#3C3C3C";
    topbarColor.addEventListener("input", function(event) {
        topbarDiv.style.backgroundColor = event.target.value;
        jsonData[0]["topbar"] = event.target.value;
        document.getElementById("json").innerHTML = JSON.stringify(jsonData);
    }, false);
    topbarColor.select();
}