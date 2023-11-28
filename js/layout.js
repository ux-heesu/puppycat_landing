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

function mobileCheck() {
    let browserWidth = document.body.clientWidth;

    if (browserWidth <= 1024) {
        // 모바일 기기체크
        let navUserAgent = navigator.userAgent.toLowerCase();
        if (navUserAgent.indexOf('android') > -1) {
            //안드로이드
            document.querySelector('.app-google').style.display = 'block';
            document.querySelector('.app-store').style.display = 'none';
        } else if (navUserAgent.indexOf('iphone') > -1 || navUserAgent.indexOf('ipad') > -1 || navUserAgent.indexOf('ipod') > -1) {
            //IOS
            document.querySelector('.app-google').style.display = 'none';
            document.querySelector('.app-store').style.display = 'block';
        } else {
            // 그외
            document.querySelector('.app-google').style.display = 'block';
            document.querySelector('.app-store').style.display = 'none';
        }
    } else {
        document.querySelector('.app-google').style.display = 'block';
        document.querySelector('.app-store').style.display = 'block';
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

    // docSlider.enable(false);

    document.querySelector('.lottie-cat').innerHTML = '<lottie-player src="img/lottie_puppy_cat.json" background="transparent" speed=".9" loop autoplay></lottie-player>';
    document.querySelector('.lottie-dog').innerHTML = '<lottie-player src="img/lottie_puppy_dog.json" background="transparent" speed=".9" loop autoplay></lottie-player>';

    mobileCheck();

    // modal open
    let btnModalOpen = document.querySelectorAll('.btn-modal-open');
    for (let i = 0; i < btnModalOpen.length; i++) {
        btnModalOpen[i].addEventListener('click', function () {
            docSlider.enable(false);

            let thisName = this.dataset.name;
            document.querySelector('#' + thisName).classList.add('active');
        });
    }

    // modal close
    let btnModalClose = document.querySelectorAll('.btn-modal-close');
    for (let i = 0; i < btnModalClose.length; i++) {
        btnModalClose[i].addEventListener('click', function () {
            docSlider.enable(true);

            this.closest('.modal').classList.remove('active');
        });
    }
});

window.addEventListener('resize', function () {
    docPosition();
    mobileCheck();
});
