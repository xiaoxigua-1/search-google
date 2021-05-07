let search = document.URL.split("#")[1];
if (search !== undefined) {
    document.getElementById("search-input").value = decodeURI(search);
    setTimeout(() => {
        document.querySelector("#cursor img").src = "./image/cursor-input.png";
    }, 3000);
    setTimeout(() => {
        document.getElementById("search-box").style = "transition: width 3s;width: 0;";
    }, 3700);
    setTimeout(() => {
        window.location = `https://www.google.com/search?q=${search}`;
    }, 6000);
}