function setup() {
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDZevknpeTdq7EAlS-UuPND44x5qe55ijM",
    authDomain: "prove1-6834d.firebaseapp.com",
    databaseURL: "https://prove1-6834d.firebaseio.com",
    projectId: "prove1-6834d",
    storageBucket: "prove1-6834d.appspot.com",
    messagingSenderId: "601195348888"
  };
  firebase.initializeApp(config);
  let divListe2 = document.getElementById("liste2");

    let ref = firebase.database().ref("medlem");

    function visMedlem(snapshot) {
        let medlemnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Medlem nr ${medlemnr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Adresse ${info.adresse}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visMedlem);



    let divListe1 = document.getElementById("liste1");
  
    let ref = firebase.database().ref("forum");
  
    function visForum(snapshot) {
      let kundenr = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
            <div>
              <h4>Forum nr ${forumnr}</h4>
              <ul>
               <li>Beskrivelse : ${info.beskrivelse}
              </ul>
            </div>
          `;
    }
    ref.on("child_added", visForum);


    let divListe = document.getElementById("liste3");
  
    let ref = firebase.database().ref("innlegg");
  
    function visInnlegg(snapshot) {
      let innleggnr = snapshot.key;
      let info = snapshot.val();
      divListe.innerHTML += `
            <div>
              <h4>Innlegg nr ${innleggnr}</h4>
              <ul>
               <li>Forumnr : ${info.forumnr}
               <li>Medlem : ${info.medlemnr}
               <li>Melding : ${info.melding}
              </ul>
            </div>
          `;
    }
    ref.on("child_added", visInnlegg);
}
