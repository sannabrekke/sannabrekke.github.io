
function setup() {
    var config = {
        apiKey: "AIzaSyAeIBV5q0mrh01HT70jkWYpM9Hz9Hn5GPY",
        authDomain: "bibliotek-87150.firebaseapp.com",
        databaseURL: "https://bibliotek-87150.firebaseio.com",
        projectId: "bibliotek-87150",
        storageBucket: "bibliotek-87150.appspot.com",
        messagingSenderId: "185984656951"
      };
      firebase.initializeApp(config);

      let database = firebase.database();

      let inpNavn = document.getElementById("navn");
      let inpLånekort = document.getElementById("lånekort");

      let btnBestill = document.getElementById("bestill");
      btnBestill.addEventListener("click",bestill);

      function bestill(e) {
        let navn = inpNavn.value;
        let kortnr = inpLånekort.value;
        let ref = database.ref("navn/" + navn);
        ref.set({ kortnr });
    }



}