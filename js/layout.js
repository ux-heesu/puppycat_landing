function docPosition() {
    let docInner = document.querySelector('.docSlider-inner');
    docInner.style.marginLeft = -docInner.clientWidth / 2 + 'px';
}
window.addEventListener('load', function () {
    /*docslider*/
    docSlider.init({});
    docPosition();
});

window.addEventListener('resize', function () {
    docPosition();
});
