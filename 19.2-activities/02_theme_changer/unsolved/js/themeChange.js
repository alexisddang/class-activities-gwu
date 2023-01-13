$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular")) {
        $("#theme").attr("href", "css/blank.css");
    } else if ($(this).hasClass("blue")) {
        $("#theme").attr("href", "css/blue.css");
    } else {
        $("#theme").attr("href", "css/dark.css");
    }
});