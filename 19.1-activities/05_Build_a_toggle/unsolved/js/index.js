// Add Event Listener Below
$("#toggle").on("click", function() {
    $("ul").slideToggle();
    $("img").each(function() {
        $(this).toggleClass("rotate");
    });
});


