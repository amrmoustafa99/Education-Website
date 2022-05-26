<script src="/path/to/cdn/jquery.slim.min.js"></script>
var toggled = false;
var circle = $("#circle");
$("#toggle").click(function () {
  $("h1, p, div").toggleClass("color-white");
  $("body").toggleClass("bck-color-black");
  if (!toggled) {
    circle.css("margin-left", "100px");
    toggled = true;
  } else {
     circle.css("margin-left", "1px");
    toggled = false;
  }
});