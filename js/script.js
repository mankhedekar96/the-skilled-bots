window.addEventListener('scroll',function(){
    let navOptions = document.querySelectorAll('#navigator a');
    navOptions.forEach(el => el.setAttribute('class',''))
    let navOption = document.getElementById('navOption' + (parseInt(window.pageYOffset/900) + 1));
    navOption.setAttribute('class','active');
});

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);