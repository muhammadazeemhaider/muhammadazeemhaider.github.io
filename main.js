$(document).ready(function() {
    $.get("https://ipinfo.io", function(response) {
        $('#location').text(`Currently in ${response.region}, ${response.country}`);
    }, "jsonp");
});
