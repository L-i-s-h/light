$(function() {
  console.log($(window).width());

  var left = ($(window).width() - 600) / 2;
  var top = ($(window).height() - 600) / 2;
  $(".circle").css({
      "top": top,
      "left": left,
    });


  var rotation = 0, 
    scrollLoc = $(document).scrollTop();
  $(window).scroll(function() {
    var newLoc = $(document).scrollTop();
    var diff = scrollLoc - newLoc;
    rotation += diff, scrollLoc = newLoc;
    var rotationStr = "rotate(" + rotation + "deg)";
    $(".circle").css({
      "-webkit-transform": rotationStr,
      "-moz-transform": rotationStr,
      "transform": rotationStr
    });
  });

  // var elems = document.querySelectorAll('div.clock div');
  //   var increase = Math.PI * 2 / elems.length;
  //   var x = 0, y = 0, angle = 0, elem;

  //   for (var i = 0; i < elems.length; i++) {
  //     var radius = 120;
  //     if (i % 2)
  //       console.log("x=" + x);
  //       console.log("y=" + y);
  //       console.log("angle=" + angle);
  //       radius = 115 
  //       elem = elems[i];
  //       x = radius * Math.cos(angle) + 200;
  //       y = radius * Math.sin(angle) + 200;
  //       elem.style.left = (x) + 'px';
  //       elem.style.top = (y) + 'px';
  //       angle += increase;
  //   }
})