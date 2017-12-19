
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
  let ref = firebase.database().ref("nations");

  function visLand(snapshot) {
      let navn = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
        <div>
          <h4>${navn}</h4>
          <ul>
           <li>Capital ${info.capital}
           <li>${info.title} ${info.leader}
           <li> Perks
              <ul>
                  <li> Money: ${info.perk.money}
                  <li> Move: ${info.perk.move}
                  <li> War: ${info.perk.war}
                  <li> Science: ${info.perk.science}
              </ul>
          </ul>
        </div>
      `;
  }
  ref.on("child_added", visLand);

}
