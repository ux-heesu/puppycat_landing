function docPosition() {
    let docInner = document.querySelector('.docSlider-inner');
    docInner.style.marginLeft = -docInner.clientWidth / 2 + 'px';
}

function headerVisible() {
    if (document.querySelector('.main-visual-col').classList.contains('docSlider-current')) {
        document.querySelector('header').style.opacity = '0';
    } else {
        document.querySelector('header').style.opacity = '1';
    }
}

window.addEventListener('load', function () {
    /*docslider*/
    docSlider.init({
        afterChange: function () {
            headerVisible();
        },
    });
    docPosition();
    headerVisible();

    document.querySelector('.lottie-cat').innerHTML = '<lottie-player src="img/lottie_puppy_cat.json" background="transparent" speed=".9" loop autoplay></lottie-player>';
    document.querySelector('.lottie-dog').innerHTML = '<lottie-player src="img/lottie_puppy_dog.json" background="transparent" speed=".9" loop autoplay></lottie-player>';

    let varUA = navigator.userAgent.toLowerCase();

    if (varUA.indexOf('android') > -1) {
        //안드로이드
        console.log('안드로이드');
    } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
        //IOS
        console.log('ios');
    }
});

window.addEventListener('resize', function () {
    docPosition();
});
