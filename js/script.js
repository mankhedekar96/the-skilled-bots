window.addEventListener('scroll',function(){
    let navOptions = document.querySelectorAll('#navigator a');
    navOptions.length && navOptions.forEach(el => el.setAttribute('class',''))
    let navOption = document.getElementById('navOption' + (parseInt(window.pageYOffset/window.height) + 1));
    navOption && navOption.setAttribute('class','active');
});