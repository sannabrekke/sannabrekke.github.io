function setup() {
    let divHimmel = document.getElementById("himmel");
    let divSanta = document.getElementById("santa");
    let stjerne = divHimmel.querySelectorAll(".stjerne");
    stjerne.forEach(stjerne => {
        stjerne.style.left = -120 + Math.floor(Math.random() * 240) + "px";
        stjerne.style.top = -80 + Math.floor(Math.random() * 160) + "px";
    });

    divSanta.addEventListener("click" , dropGifts);

    function dropGifts (e) {
        let pakke = document.createElement('div');
        pakke.className = "pakke";
        pakke.style.left = e.screenX + "px";
        pakke.style.top = (e.screenY - 50) + "px";
        divHimmel.appendChild(pakke);


    }

    function makeSnow() {
        for (let i = 0; i < 254; i++) {
            let snow = document.createElement('div');
            snow.className = "snow"; 
            snow.style.left = Math.random()* 100 + "vw";
            snow.style.animationDelay = Math.random() * 5000 + "ms";
            let radius = Math.random() * 5 + 1;
            snow.style.width = radius + "px"; 
            snow.style.height = radius + "px";
            divHimmel.appendChild(snow);
        }
    }

    makeSnow();
    
        function cannonSnow() {
            for (let i = 0; i < 254; i++) {
                let snow = document.createElement('div');
                snow.className = "powder"; 
                snow.style.left = Math.random()* 10 + "vw";
                snow.style.animationDelay = Math.random() * 5000 + "ms";
                let radius = Math.random() * 5 + 1;
                snow.style.width = radius + "px"; 
                snow.style.height = radius + "px";
                divHimmel.appendChild(snow);
            }
    }


}