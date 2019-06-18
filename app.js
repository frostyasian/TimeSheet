$("#submit").on("click", function() {

    database.ref("/time-sheet").push({
        name: $("#name-input").val(),
        role: $("#role-input").val(),
        startDate: $("#start-year-input").val(),
        rate: $("#rate-input").val(),
    });
    
});


function populate(response) {

    for (var i = 0; i < response.length; i ++) {
        var newEntry = $("<tr>");
        newEntry.append("<th>").text($(response[i].name));
        newEntry.append("<th>").text($(response[i].role));
        newEntry.append("<th>").text($(response[i].startDate));
        var monthsWorked = "";
        newEntry.append("<th>").text(monthsWorked);
        newEntry.append("<th>").text($(response[i].rate));
        var totalBilled = "";
        newEntry.append("<th>").text(totalBilled);
        $("#current-table").append(newEntry);
    }
    
}