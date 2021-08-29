$(function() {
    $('.floor_nav ul li').eq(2).click(function() {
        $('html,body').stop().animate({
            scrollTop: 0
        });
    });
    $('.floor_nav li').click(function() {
        // $(this).index();
        var divTop = $('.floor').children('div').eq($(this).index()).offset().top;
        // console.log(Top);
        $('html,body').stop().animate({
            scrollTop: divTop
        });
        $(this).css('background', 'red').siblings('li').css('background', '')
    });
    $(window).scroll(function() {
        $('.floor').children('div').each(function (i, ele) {
            // ele和i是相对应的
            if ($(document).scrollTop() >= $(ele).offset().top - 5) {
                $('.floor_nav li').eq(i).css('background', 'red').siblings('li').css('background', '');
            } else {
                $('.floor_nav li').eq(i).css('background', '');
            }
        });
    });
    // $('.lifeservice ul li').mouseover(function() {
    //     $(this).siblings('li').stop().fadeTo(10, .3);
    // });
    // $('.lifeservice ul li').mouseout(function() {
    //     $('.lifeservice ul li').stop().fadeTo(10, 1);
    // });
    $('.lifeservice ul li').hover(function() {
        $(this).siblings('li').stop().fadeTo(10, .3);
    }, function() {
        $('.lifeservice ul li').stop().fadeTo(10, 1);
    });
    $('.news-bd ul li').hover(function() {
        $(this).siblings('li').stop().fadeTo(10, .3);
    }, function() {
        $('.news-bd ul li').stop().fadeTo(10, 1);
    });
    $('section .w .fr>ul>li').hover(function() {
        $(this).children('ul').stop().slideToggle(700);
    });
    // $('.jiadian .box_hd .tab_list ul li').click(function() {
    //     console.log($('.jiadian .box_hd .tab_list ul li').index());
    //     var content_index = $('.jiadian .box_hd .tab_list ul li').index()
    //     console.log($('.jiadian .box_bd > div').eq(content_index));
    //     // $('.jiadian .box_bd > div').eq(content_index).stop().slideToggle(700);
    // })
});
