
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

  // Create a variable to reference the database.
  var database = firebase.database();
  
  database.ref("time-sheet").on("value", function (snapshot) {
    console.log("snapshot: " + JSON.stringify(snapshot));
});

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


// ignore this for now...
dataRef.ref(dbTimeSheet).on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().email);
    console.log(childSnapshot.val().age);
    console.log(childSnapshot.val().comment);
    console.log(childSnapshot.val().joinDate);

    // full list of items to the well
    $("#full-member-list").append("<div class='well'><span class='member-name'> " +
        childSnapshot.val().name +
        " </span><span class='member-email'> " + childSnapshot.val().email +
        " </span><span class='member-age'> " + childSnapshot.val().age +
        " </span><span class='member-comment'> " + childSnapshot.val().comment +
        " </span></div>");

    // Handle the errors
    }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
    });
  
  