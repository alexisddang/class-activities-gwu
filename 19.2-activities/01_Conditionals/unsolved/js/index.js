$('.tab').on("click", function(){
  if ($(this).hasClass("tab1")) {
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");

    $("#tabContent1").css("display", "block");
    $("#tabContent2").css("display", "none");
  }
  else {
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");

    $("#tabContent1").css("display", "none");
    $("#tabContent2").css("display", "block");
  }
});
