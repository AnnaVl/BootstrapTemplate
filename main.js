window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "#fff";
    document.getElementById("txt").style.color="#454545";

  } else {
    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,.1)";
    document.getElementById("txt").style.color="#F4714D"
  }
}


