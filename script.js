const to_topbtn = document.getElementById('to_top');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    to_topbtn.style.display = "block";
  } else {
    to_topbtn.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
}

to_topbtn.addEventListener('click',()=> {
    topFunction();
});