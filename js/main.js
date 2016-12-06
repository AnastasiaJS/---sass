/**
 * Created by Administrator on 2016/7/23.
 */

require.config({

    paths:{
        jquery:'jquery-3.1.0.min'
    }
});

require(['jquery'],function ($) {

    $("#backTop").on('click',move);
    $(window).on('scroll',function () {
        checkPosition($(window).height());
    });
    checkPosition($(window).height());
    function move() {
        $('html,body').animate({
            scrollTop:0
        },800)
    }

    function checkPosition(pos) {
        if($(window).scrollTop() >　pos){

            $('#backTop').fadeIn();
        }
        else {
            $('#backTop').fadeOut();

        }
    }
})