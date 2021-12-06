var count = 1;

show(count);

function plus(n) { show(count += n); }

function current(n) { show(count = n); }

function show(n) {
  var i, slides = document.getElementsByClassName("sl");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {count = 1}
  if (n < 1) {count = slides.length}

  for (i = 0; i < slides.length; i++) { slides[i].style.display = "none"; }
  for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", ""); }
    
  slides [count-1].style.display = "block";
  dots[count-1].className += " active";
}