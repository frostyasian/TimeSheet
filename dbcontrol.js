/* global moment firebase */

// Initialize Firebase

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyABVthmV5HJ_ZKI_5RTw9H4hcfQp1AzXCY",
    authDomain: "rpsdatabase-85b5a.firebaseapp.com",
    databaseURL: "https://rpsdatabase-85b5a.firebaseio.com",
    projectId: "rpsdatabase-85b5a",
    storageBucket: "rpsdatabase-85b5a.appspot.com",
    messagingSenderId: "486797395310",
    appId: "1:486797395310:web:b981078317f81f04"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dbTimeSheet = database.ref("/time-sheet");


  firebase.initializeApp(config);
  
  // Create a variable to reference the database.
  var database = firebase.database();
  
  database.ref("time-sheet").on("value", function (snapshot) {
    console.log("snapshot: " + JSON.stringify(snapshot));
});

  // -----------------------------
  function PushToDB(oneRecord) {
    database.ref(dbTimeSheet).push({
        name: name,
        email: email  
    })
}
