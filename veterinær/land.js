
function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCCd4fILfD14dSy0gFtr6ozgi-tDIELiWw",
    authDomain: "civilisations-c6300.firebaseapp.com",
    databaseURL: "https://civilisations-c6300.firebaseio.com",
    projectId: "civilisations-c6300",
    storageBucket: "civilisations-c6300.appspot.com",
    messagingSenderId: "116025608488"
  };
  firebase.initializeApp(config);
  let divListe = document.getElementById("liste");
  let ref = firebase.database().ref("kunde");

  function visLand(snapshot) {
      let kundenr = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
        <div>
          <h4>Kunde nr ${kundenr}</h4>
          <ul>
           <li>${info.fornavn} ${info.etternavn}
           <li>Epost : ${info.e-post}
           <li>Mobil : ${info.mobil}
          </ul>
        </div>
      `;
  }
  ref.on("child_added", visLand);

}
