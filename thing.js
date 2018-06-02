var textToWrite = "heeheheehe"


document.body.appendChild(document.createElement("p"));
document.querySelector("body p:last-child").id = "jstext";
document.querySelector("body p:last-child").className = "text-warning mallana big";
document.querySelector("#jstext").innerHTML = textToWrite;
