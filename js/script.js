$(function () {

    //ヘッダースクロール
    $(window).on("scroll", function () {
        const sliderHeight = $(".header").height();

        if (sliderHeight < $(this).scrollTop()) {
            $("#js-header").addClass("js-header-scroll");
        } else {
            $("#js-header").removeClass("js-header-scroll");
        }
    });

    //ハンバーガーボタン
    $('#js-hamburger').click(function () {
        $('body').toggleClass('is-drawerActive');

        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', true)
            $('#js-global-menu').css('visibility', 'visible')
            $('#js-global-menu').attr('aria-hidden', 'false')
            $(".logo__img-path").addClass("js-logo-color");
        } else {
            $(this).attr('aria-expanded', false)
            $('#js-global-menu').css('visibility', 'hidden')
            $('#js-global-menu').attr('aria-hidden', 'true')
            $(".logo__img-path").removeClass("js-logo-color");
        }

        //ナビゲーション表示時背景固定
        if ($("body").css("overflow") === "hidden") {
            $("body").css({ height: "", overflow: "" });
        } else {
            $("body").css({ height: "100%", overflow: "hidden" });
        }
    });

    //missionセクション 無限スクロール
    var missionSlideNum = $(".mission__slide-list li").length;
    var missionThumbNum = missionSlideNum - 1;

    $(".mission__slide-list").slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: missionThumbNum,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        variableWidth: true,
    });

    //memberセクション 無限スクロール
    var memberSlideNum = $(".member__slide-list li").length;
    var memberThumbNum = memberSlideNum - 1;

    $(".member__slide-list").slick({
        // autoplay: true,
        // autoplaySpeed: 0,
        // speed: 5000,
        // cssEase: 'linear',
        // slidesToShow: thumbNum,
        // pauseOnFocus: false,
        // pauseOnHover: false,
        // arrows: false,
        variableWidth: true,

        infinite: false,
    //     arrows: true,
        prevArrow: '<button class="member__slide-btn member__prev-btn"></button>',
        nextArrow: '<button class="member__slide-btn member__next-btn"></button>',
        slidesToShow: memberThumbNum,
        slidesToScroll: 1,
    });
})