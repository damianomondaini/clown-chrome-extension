function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = () => {
    let body = document.body, html = document.documentElement;
        let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        let width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

    const NB_CLOWN = getRndInteger(1, 5);

    for (let i = 0; i < NB_CLOWN; i++) {
        let rotation = getRndInteger(0, 360);
        let side = getRndInteger(20, 100);
        let top = getRndInteger(0, height);
        let left = getRndInteger(0, width);
        let clown = document.createElement("img");

        clown.src = "https://images.emojiterra.com/twitter/v13.0/512px/1f921.png";
        clown.width = side;
        clown.height = side;
        clown.style.transform = "rotate(" + rotation + "deg)";
        clown.style.position = "absolute";
        clown.style.top = top + "px";
        clown.style.left = left + "px";
        clown.style.pointerEvents = "none";
        clown.style.zIndex = 9999999;

        body.appendChild(clown);
    }
}