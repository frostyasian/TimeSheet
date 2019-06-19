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
    console.log("populate called ***");

    var name = "(not set)"; 
        name = snapShot.val().name;

    var role = "(not set)"; 
        role = snapShot.val().role;

    var startDate = "(not set)"; 
        startDate = snapShot.val().startDate;

    var rate = "(not set)"; 
        rate = snapShot.val().rate;
    console.log("adding row to table with: name'"+name+"' role: '"+role+"' rate: '"+rate+"' sd: '"+startDate+"'");
    var newEntry = $("<tr>");
    newEntry.append("<th>").text(name);
    newEntry.append("<th>").text(role);
    newEntry.append("<th>").text(startDate);
    var monthsWorked = "";
    newEntry.append("<th>").text(monthsWorked);
    newEntry.append("<th>").text(rate);
    var totalBilled = "";
    newEntry.append("<th>").text(totalBilled);
    $("#current-table").append(newEntry);
    
}