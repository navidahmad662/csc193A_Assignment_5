
window.onload = function() {
    document.getElementById("bigger").onclick = makeBigger;
    document.getElementById("fancyShmancy").onchange = makeFancy;
    document.getElementById("boringBetty").onchange = makeBoring;
    document.getElementById("moo").onclick = moo;
}

function makeBigger() {
    let textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

function makeFancy() {
    let textArea = document.getElementById("userText");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function makeBoring() {
    let textArea = document.getElementById("userText");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function moo() {
    let textArea = document.getElementById("userText");
    let sentences = textArea.value.split(".");
    for(let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
        textArea.value = textArea.value.toUpperCase();
    }
    textArea.value = sentences.join(". ");
}
