$.getScript("dbcontrols.js", function() {
    alert("Script loaded but not necessarily executed.");
});

$("#submit").on("click", function() {
    record = {
      name: $("#name-input").val().trim(),
      role: $("#role-input").val().trim(),
      startDate: $("#start-year-input").val().trim(),
      rate: $("#rate-input").val().trim(),
    }

    PushToDB(record);
  
});


function populate(snapShot) {

    var newEntry = $("<tr>");
    newEntry.append("<th>").text($(snapShot.val().name));
    newEntry.append("<th>").text($(snapShot.val().role));
    newEntry.append("<th>").text($(snapShot.val().startDate));
    var monthsWorked = "";
    newEntry.append("<th>").text(monthsWorked);
    newEntry.append("<th>").text($(snapShot.val().rate));
    var totalBilled = "";
    newEntry.append("<th>").text(totalBilled);
    $("#current-table").append(newEntry);
    
}