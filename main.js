window.onload = function () {
  $(".toggle1").click(function () {
    $(".panel1").fadeToggle();
    $(".panel2").fadeOut();
  });
  $(".toggle2").click(function () {
    $(".panel2").fadeToggle();
    $(".panel1").fadeOut();
  });
};
