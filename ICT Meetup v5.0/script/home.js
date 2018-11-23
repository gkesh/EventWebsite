$(document).ready(function() {
    var winWidth = $(window).width();
    $(window).on('resize', function() {
        var curWidth = $(window).width();
        if (Math.abs(winWidth - curWidth) > 150) {
            location.href = 'index.html';
        }
    });
    $(window).on('load', function() {
        if (window.location.hash) {
            location.href = 'index.html';
        }
    });
    //Countdown
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let countDown = new Date('Jun 9, 2018 00:00:00').getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

            //if (distance < 0) {
            //}

        }, second)
    //Countdown end

    if (jQuery(".toggle .toggle-title").hasClass('active')) {
        jQuery(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }
    jQuery(".toggle .toggle-title").click(function() {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
        } else {
            jQuery(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
        }
    });

    var isMenuOpen = false,
        isItemVisible = false,
        isMapOpen = false,
        isRegisterOpen = false;
    $('.nav-icon').click(function() {
        $(this).toggleClass('open');
        if ($(window).width() < 500) {
            var dist = $('.menu-btn').offset().left;
            if (!isMenuOpen) {
                $('.header').css('background', 'transparent');
                $(".logo").fadeOut(200);
                $(".menu").removeClass('invisible');
                $(".menu").addClass('visible');
                $(".menu>div").each(function() {
                    $(this).animate({
                        right: dist
                    });
                    dist -= 70;
                });
                isMenuOpen = true;
            } else {
                $(".menu>div").animate({
                    right: dist
                });
                $(".logo").fadeIn(1500);
                $(".menu").removeClass('visible');
                $(".menu").addClass('invisible');
                isMenuOpen = false;
                $('.header').css('background', '#4C516D');
            }
        } else {
            var dist = $(window).width() - $('.menu-btn').offset().left + 20;
            if (!isMenuOpen) {
                $(".menu").removeClass('invisible');
                $(".menu").addClass('visible');
                $(".menu>div").each(function() {
                    $(this).animate({
                        right: dist
                    });
                    dist += 70;
                });
                isMenuOpen = true;
            } else {
                $(".menu>div").animate({
                    right: dist
                });
                $(".menu").removeClass('visible');
                $(".menu").addClass('invisible');
                isMenuOpen = false;
            }
        }
        if (isItemVisible) {
            $(".slide-in").css("display", "none");
            $(".slide-in").removeClass("show-all");
            $(".slide-in").addClass("hide-all");
            $("body").css("overflow-y", "auto");
            $(".wrapper>div").each(function() {
                jQuery(this).css('visibility', 'visible');
            });
            $(".register").css("display", "block");
            isItemVisible = false;
        }
    });
    $('.register').click(function() {
        if (!isRegisterOpen) {
            isRegisterOpen = true;
            $('.wrapper').children().fadeOut(200);
            setTimeout(next, 200);

            function next() {
                $('.goglform').fadeIn(500);
                $('.goglform').css("display", "flex");
                $('.goglform').show();
                setTimeout(formIn, 200);

                function formIn() {
                    $('.frame-container').removeClass('hide');
                    $('.frame-container').addClass('show');
                }
            }
        }
    });
    $(".cancel").click(function() {
        isRegisterOpen = false;
        $('.frame-container').removeClass('show');
        $('.frame-container').addClass('hide');
        setTimeout(prev, 1000);

        function prev() {
            $('.wrapper').children().fadeIn(500);
            $('.goglform').fadeOut(500);
            $('.goglform').css("display", "none");
        }
    });
    $(".locationlogo, .showmap").click(function() {
        isMapOpen = true;
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        $('.map-container').fadeIn(200);
        $('.map-container').css("display", "block");
        $('.map-container').animate({
            left: '+=100vw'
        }, 1000);
        $("body").css("overflow-y", "hidden");
    });
    //Closing The Map
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            $("body").css("overflow-y", "auto");
            $('.map-container').animate({
                left: '-=100vw'
            }, 1000);
            $('.map-container').fadeOut(200);
            setTimeout(function() {
                $('.map-container').css("display", "none");
            }, 1000);
            isMapOpen = false;
        }
    });
    $('.map-container img').click(function(e) {
        $("body").css("overflow-y", "auto");
        $('.map-container').animate({
            left: '-=100vw'
        }, 1000);
        $('.map-container').fadeOut(200);
        setTimeout(function() {
            $('.map-container').css("display", "none");
        }, 1000);
        isMapOpen = false;
    });
    //Close Map End
    //Scroll to position for elements
    $(".teamlogo").click(function() {
        var x = $(".team").position();
        $("html, body").animate({
            scrollTop: x.top
        }, "slow");
    });
    $(".eventslogo").click(function() {
        var x = $(".events").position();
        $("html, body").animate({
            scrollTop: x.top - 50
        }, "slow");
    });
    //Scroll to position end
    //Menu portion
    $(".info-icon,.gallery-icon,.faq-icon").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        var e = $(this).attr("data-type");
        $(".wrapper>div").each(function() {
            jQuery(this).css('visibility', 'hidden');
        });
        $("body").css("overflow", "hidden");
        $(".register").css("display", "none");
        slideItIn();

        function slideItIn() {
            $(".slide-in").css("display", "block");
            $(".slide-in").removeClass("hide-all");
            $(".slide-in").addClass("show-all");
            switch (e) {
                case "info-icon":
                    $(".gallery,.faq").css("display", "none");
                    $(".info").fadeIn(200);
                    $(".info").css("display", "block");
                    break;
                case "gallery-icon":
                    $(".info,.faq").css("display", "none");
                    $(".gallery").fadeIn(200);
                    $(".gallery").css("display", "block");
                    break;
                case "faq-icon":
                    $(".gallery,.info").css("display", "none");
                    $(".faq").fadeIn(200);
                    $(".faq").css("display", "block");
                    break;
            }
            isItemVisible = true;
        }
    });
    //About team Portion
    (function() {
        'use strict';
        var timeinfos = document.querySelectorAll(".timeline .timeinfo");
        var people = document.querySelectorAll(".row .card");

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < timeinfos.length; i++) {
                if (isElementInViewport(timeinfos[i])) {
                    timeinfos[i].classList.add("move-it");
                }
            }
            for (var i = 0; i < people.length; i++) {
                if (isElementInViewport(people[i])) {
                    people[i].classList.remove("fade-out");
                    people[i].classList.add("fade-in");
                } else {
                    people[i].classList.remove("fade-in");
                    people[i].classList.add("fade-out");
                }
            }
        }
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

    })();

    $(".tableShow").on("click", function() {
        var data = $(this).attr('data-modal');
        let tableContent = new Contents();
        switch (data) {
            case 'tb1':
                $('.popup h2').html('DAY 1');
                $('.messagecontent').html(tableContent.day1table);
                break;
            case 'tb2':
                $('.popup h2').html('DAY 2');
                $('.messagecontent').html(tableContent.day2table);
                break;
        }
        location.href = '#message';
    });
    //var speakerData = JSON.parse(speakerinfo);
    $(".speaker-card").on("click", function() {
        var data = $(this).attr('data-modal');
        $('.pop-profile').html(speakerinfo[data]);
        location.href = '#profile';
    });

    $(".company-num").on("click", function() {
        var data = `<div class="phoneinfo">
        <img src="images/logos/phone-icon-black.png" alt="Phone">
        <span>+977-9880196783</span>
      </div>`;
        $('.messagecontent').html(data);
        location.href = "#message";
    });
});
