$(document).ready(function () {
    var percent = 0,
        bar = $('.progress'),
        crsl = $('#main-slider__carousel');

    function progressBarCarousel() {
        bar.css({
            width: percent + '%'
        });
        percent = percent + 0.5;
        if (percent > 100) {
            percent = 0;
            crsl.carousel('next');
        }
    }

    crsl.carousel({
        interval: false,
        pause: true
    }).on('slid.bs.carousel', function () {
    });
    var barInterval = setInterval(progressBarCarousel, 30);
    crsl.hover(
        function () {
            clearInterval(barInterval);
        },
        function () {
            barInterval = setInterval(progressBarCarousel, 30);
        })
});

$('#tab_selector').on('change', function (e) {
    $('.nav-tabs li a').eq($(this).val()).tab('show');
});

$(function () {
    $("#sales-tab-1 .sales-item").slice(0, 2).show();
    $("#tabs1-loadmore").on('click', function (e) {
        e.preventDefault();
        $("#sales-tab-1 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-1 .sales-item:hidden").length == 0) {
            $("#sales-tab-1 .button-load").removeClass('visible-xs-inline-block').hide();
        }

    });
});

$(function () {
    $("#sales-tab-2 .sales-item").slice(0, 2).show();
    $("#tabs2-loadmore").on('click', function (e) {
        e.preventDefault();
        $("#sales-tab-2 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-2 .sales-item:hidden").length == 0) {
            $("#sales-tab-2 .button-load").removeClass('visible-xs-inline-block').hide();
        }

    });
});

$(function () {
    $("#sales-tab-3 .sales-item").slice(0, 2).show();
    $("#tabs3-loadmore").on('click', function (e) {
        e.preventDefault();
        $("#sales-tab-3 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-3 .sales-item:hidden").length == 0) {
            $("#sales-tab-3 .button-load").removeClass('visible-xs-inline-block').hide();
        }

    });
});

$(function () {
    $("#sales-tab-4 .sales-item").slice(0, 2).show();
    $("#tabs4-loadmore").on('click', function (e) {
        e.preventDefault();
        $("#sales-tab-4 .sales-item:hidden").slice(0, 2).slideDown();
        if ($("#sales-tab-4 .sales-item:hidden").length == 0) {
            $("#sales-tab-4 .button-load").removeClass('visible-xs-inline-block').hide();
        }

    });
});

$(function () {
    $(".clearence .sales-item").slice(0, 2).show();
    $("#clearence-loadmore").on('click', function (e) {
        e.preventDefault();
        $(".clearence .sales-item:hidden").slice(0, 2).slideDown();
        if ($(".clearence .sales-item:hidden").length == 0) {
            $(".clearence .button-load").removeClass('visible-xs-inline-block').hide();
        }

    });
});

jQuery(document).ready(function () {
    var width2 = $('.sales-tab.container').outerWidth();

    if (width2 > 1171) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 971) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 749) {
        $('.sales-item').width((width2 - 90) * 0.33333);
    } else if (width2 < 749) {
        $('.sales-item').width((width2 - 60) * 0.5);
    }
});

$(window).resize(function () {
    var width2 = $('.sales-tab.container').outerWidth();

    if (width2 > 1171) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 971) {
        $('.sales-item').width((width2 - 120) * 0.25);
    } else if (width2 > 749) {
        $('.sales-item').width((width2 - 90) * 0.33333);
    } else if (width2 < 749) {
        $('.sales-item').width((width2 - 60) * 0.5);
    }

});

jQuery(document).ready(function () {
    function htmSlider() {
        var slideWrap = jQuery('.sales-list');
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');
        var is_animate = false;
        var slideWidth = jQuery('.sales-item').outerWidth();
        var newLeftPos = slideWrap.position().left - slideWidth;

        nextLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });
        prevLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });

        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function () {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }
    htmSlider();
});

jQuery(document).ready(function () {
    function htmSlider() {
        var slideWrap = jQuery('.sales-list-2');

        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        var slideWidth = jQuery('.sales-item').outerWidth();

        var newLeftPos = slideWrap.position().left - slideWidth;

        nextLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        prevLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function () {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });


    }
    htmSlider();
});

jQuery(document).ready(function () {
    function htmSlider() {
        var slideWrap = jQuery('.sales-list-3');
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        var slideWidth = jQuery('.sales-item').outerWidth();

        var newLeftPos = slideWrap.position().left - slideWidth;
        nextLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        prevLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });

        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function () {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }

    htmSlider();
});

jQuery(document).ready(function () {
    function htmSlider() {

        var slideWrap = jQuery('.sales-list-4');
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        var slideWidth = jQuery('.sales-item').outerWidth();
        var newLeftPos = slideWrap.position().left - slideWidth;
        nextLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });

        prevLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function () {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }
    htmSlider();
});

jQuery(document).ready(function () {
    function htmSlider() {

        var slideWrap = jQuery('.sales-list-5');
        var nextLink = jQuery('.right');
        var prevLink = jQuery('.left');

        var playLink = jQuery('.auto');

        var is_animate = false;

        var slideWidth = jQuery('.sales-item').outerWidth();

        var newLeftPos = slideWrap.position().left - slideWidth;

        nextLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                });

            }
        });
        prevLink.click(function () {
            if (!slideWrap.is(':animated')) {

                slideWrap
                    .css({
                        'left': newLeftPos
                    })
                    .find('.sales-item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({
                        left: 0
                    }, 500);

            }
        });
        function autoplay() {
            if (!is_animate) {
                is_animate = true;
                slideWrap.animate({
                    left: newLeftPos
                }, 500, function () {
                    slideWrap
                        .find('.sales-item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({
                            'left': 0
                        });
                    is_animate = false;
                });
            }
        }


        var width2 = $('.sales-tab.container').outerWidth();
        var timer = null;
        if (width2 > 749) {
            clearInterval(timer);
            timer = setInterval(autoplay, 5000);
        }

        $(window).resize(function () {
            var width2 = $('.sales-tab.container').outerWidth();
            clearInterval(timer);

            if (width2 > 749) {
                clearInterval(timer);
                timer = setInterval(autoplay, 5000);
            } else if (width2 < 749) {
                clearInterval(timer);
            }
        });

    }
    htmSlider();
});
