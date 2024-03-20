/* 下拉選單 */
$(function(){
    $('.menu li').on({
        mouseover:function(){
            $(this).children('div').stop().slideDown();
        },
        mouseout:function(){
            $(this).children('div').stop().slideUp();
        }
    });


/* 滾動至指定位置 */

$(window).scroll(function () {
    var h = $(window).height() - 400;

        if ($(this).scrollTop() > h ) {

            $(' .food_1').css("animation-name", "food_1");
            $(' .food_2').css("animation-name", "food_2");

        }
    });
    /* jq ui tabs */
    $( "#tabs" ).tabs();

    /* lightbox */
    lightbox.option({
        'wrapAround':true
    });

});