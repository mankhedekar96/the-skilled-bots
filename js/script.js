let lastScrollTop = 0;

function vh(v) {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

window.addEventListener('load',function(){
    window.addEventListener('scroll',function(event){
        event.preventDefault();
        let navOptions = document.querySelectorAll('#navigator a');
        navOptions.length && navOptions.forEach(el => el.setAttribute('class',''))
        let navOption = document.getElementById('navOption' + (parseInt(window.pageYOffset/vh(95)) + 1));
        navOption && navOption.setAttribute('class','active');
    }, false);
}, false);