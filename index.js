const search = document.URL.split("#")[1];

function textSize(fontSize,fontFamily,text) {
    let span = document.createElement("span");
    let result = {};
    result.width = span.offsetWidth;
    result.height = span.offsetHeight;
    span.style.visibility = "hidden";
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.display = "inline-block";
    document.body.appendChild(span);
    if(typeof span.textContent != "undefined"){
        span.textContent = text;
    }else{
        span.innerText = text;
    }
    result.width = parseFloat(window.getComputedStyle(span).width) - result.width;
    result.height = parseFloat(window.getComputedStyle(span).height) - result.height;
    return result;
}
if (search !== undefined) {
    document.getElementById("search-box").innerText = decodeURI(search);
    setTimeout(() => {
        document.querySelector("#cursor img").src = "./image/cursor-input.png";
    }, 3000);
    setTimeout(() => {
        document.getElementById("search-box").style = 
            `color: #000000;--v: ${textSize("18px", "Monaco", decodeURI(search)).width + 18}px;animation: key 3s steps(${search.length + 1}) 1, caret ${1 / (decodeURI(search).length / 3)}s steps(1) infinite;`;
    }, 3700);
    setTimeout(() => {
        window.location = `https://www.google.com/search?q=${search}`;
    }, 6700);
}