var data = [];

function render() {
    var table = $("table");
    table.html("");

    data.forEach(function(version) {
        var row = $("<tr></tr>");
        row.append("<td>" + version.title + "</td>");
        row.append("<td>" + version.format + "</td>");
        row.append("<td>" + (version.released || "unknown")+ "</td>");
        row.append("<td>" + version.country + "</td>");

        table.append(row);
    });
}

$(".go").click(function() {
    var id = $(".master-id").val(),
        url = "https://api.discogs.com/masters/" + id + "/versions?per_page=1000";

    $.get(url, function(res) {
        data = res.versions;
        console.log(data);
        render();
    });
});
