function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBsSmSbBvjGwUKapak-USd6oUBnkoVE0ls",
        authDomain: "civz-7871d.firebaseapp.com",
        databaseURL: "https://civz-7871d.firebaseio.com",
        projectId: "civz-7871d",
        storageBucket: "civz-7871d.appspot.com",
        messagingSenderId: "324948067446"
    };
    firebase.initializeApp(config);
    let divListe = document.getElementById("liste");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            divListe.innerHTML = dropBox;
        }
    });

    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e => 
            `<option values="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}