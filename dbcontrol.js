

$.getScript("app.js", function() {
    alert("Script loaded but not necessarily executed.");
 });

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

function doTest() {
    var newRecord = {
        name: "bslghs",
        email: "sfslvi we "
    }
    PushToDB(newRecord);
}

  // -----------------------------
  function PushToDB(oneRecord) {
    database.ref(dbTimeSheet).push({
        name: oneRecord.name,
        role: oneRecord.role,  
        startDate: oneRecord.startDate,
        rate: oneRecord.rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
}

// function getall() {
//     database.ref(dbTimeSheet).
// }

// ignore this for now...
database.ref(dbTimeSheet).on("child_added", function(childSnapshot) {
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().rate);
    console.log(childSnapshot.val().dateAdded);
    populate(childSnapshot); // this is the function in the 'other' javascript file.
    // Handle the errors
    }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
  
  