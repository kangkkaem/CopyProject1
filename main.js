
// swiper 라이브러리 //
document.addEventListener('DOMContentLoaded', function () {

    var swiper1 = new Swiper(".slide01", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        observer: true,
        observeParents: true,
    });
});

// swiper 라이브러리02//
function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();

var swiper2 = new Swiper(".swiper-container", {
    slidesPerView: 5,
    slidesPerGroup: 5,
    cssMode: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    pagination: {
        el: ".pagi",
        clickable: true,
    },
    observer: true,
    observeParents: true,

});

$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $('.topnav').height();
        if ($(window).scrollTop() > navHeight) {
            $('.nav-sticky').addClass('fixed');
        }
        else {
            $('.nav-sticky').removeClass('fixed');
        }
    });
});
