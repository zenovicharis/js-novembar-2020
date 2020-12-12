$(document).ready(function() {
    $("#form-input").on("submit", function(e) {
        e.preventDefault();
        var data = {};
        $.each(this, function(i, el) {
            if($(el).attr("id") != undefined) {
                data[$(el).attr("id")] = $(el).val();
            }
        });
        createNewRow(data);
        this.reset();
    });
});

const createNewRow = function(data) {
    var table = $("#list-of-employees");

    var tr = $("<tr>");
    var tds = Object.keys(data).map(key => {
        var td = $("<td>");
        td.text(data[key]);
        return td;
    });

    var editButton = $("<button>").text("Edit").attr("id", "edit-row");
    var deleteButton = $("<button>").text("Delete").attr("id", "delete-row");

    var actionSection = $("<td>").attr("class", "active").append(editButton, deleteButton);

    var saveButton = $("<button>").text("Save Changes").attr("id", "save-row");
    var discardButton = $("<button>").text("Discard").attr("id", "discard-row");
    
    var saveSection = $("<td>").attr("class", "inactive").append(saveButton, discardButton).hide();
    
    tds.push(actionSection);
    tds.push(saveSection);


    tr.append(tds)
    tr.attr("data-id", new Date().getTime());
    table.append(tr);
}

$(document).on("click", "button#edit-row", function(e) {
    var tr = $(this).parent().parent();
    var tds = tr.find("td");
    var data = []
    $.each(tds, function(i, el) {
        if ($(el).attr("class") === undefined) {
            var val = $(el).text();
            $(el).text("")
            data.push(val);
            var input = $("<input>").val(val);
            $(el).append(input);
        }
    });

    window.localStorage.setItem(tr.attr("data-id"), data.toString());

    toggleActions(tr);

});

$(document).on("click", "button#delete-row", function() {
    var tr = $(this).parent().parent();
    tr.remove();
});

$(document).on("click", "button#save-row", function() {
    var tr = $(this).parent().parent();
    var tds = tr.find("td");

    $.each(tds, function(i, el) {
        if ($(el).attr("class") === undefined) {
            var val = $(el).find("input").val();
            $(el).empty();
            $(el).text(val);
        }
    });

    toggleActions(tr);
});

$(document).on("click", "button#discard-row", function() {
    var tr = $(this).parent().parent();
    var id = tr.attr("data-id");
    var prevValue = window.localStorage.getItem(id);
    var oldValues = prevValue.split(",");

    var tds = tr.find("td");

    $.each(oldValues, function(i, el) {
        if ($(tds[i]).attr("class") === undefined) {
            $(tds[i]).find("input").remove();
            $(tds[i]).text(el);
        }
    });

    toggleActions(tr);
});

function toggleActions(tr) {
    if(tr.find("td.inactive").is(":hidden")) {
        tr.find("td.inactive").show();
        tr.find("td.active").hide();
    } else {
        tr.find("td.inactive").hide();
        tr.find("td.active").show();
    }
}

$.ajax({
    url: "http://localhost:3000/workers",
    method: "GET"
}).done(function(data) {
    console.log(data);
});



