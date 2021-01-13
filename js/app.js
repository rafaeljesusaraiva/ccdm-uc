/* 
 *  Splash Screen
 */

// Timeout para trocar a gif por imagem
setTimeout(() => {
    document.getElementById('splashImg').classList.remove('hide');
    document.getElementById('splashGif').classList.add('hide');
}, 3000);

// Timeout para mostrar o site após 6s de inatividade
setTimeout(hideSplash, 3300);

function hideSplash() {
    let splash = document.getElementsByClassName('splash-screen')[0];
    if (!splash.classList.contains('moveOut')) {
        setTimeout(() => {
            splash.classList.add('moveOut');
        }, 100);
        setTimeout(() => {
            splash.setAttribute("style", "display:none;");
        }, 1100);
    }
}

/* 
 *  Fullpage JS
 */

var myFullpage = new fullpage('#fullpage', {
	keyboardScrolling: true,
    lazyLoading: true,
    normalScrollElements: '.desc',
    afterResize: function(width, height){
        fullpage_api.reBuild();
    },
});

/* 
 *  Set padding height for text in speakers
 */

var speakerBios = document.getElementsByClassName('bio');
for (let index = 0; index < speakerBios.length; index++) {
    const elem = speakerBios[index];
    elem.previousElementSibling.children[0].onload = function () {
        let profileHeight = elem.previousElementSibling.clientHeight;
        elem.setAttribute('style', 'padding-bottom: '+profileHeight+'px');
    }
}