@@include('_slick.min.js');
@@include('_menu.js');

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true
    });
});

$(document).ready(function(){
    $('.slider-img-menu').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
    });
});

function testWebP(callback) {
    var webP = new Image(); webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) { document.querySelector('body').classList.add('webp');
    } else{ document.querySelector('body').classList.add('no-webp');
    }
});


