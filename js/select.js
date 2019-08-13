$(function () {

    var arg = window.location.search.substring(1).split('=')[1];
    // console.log(arg);
    //切换样式
    function change(num) {
        $('.banner').css('background-image',"url(\"../images/about/banner"+(num+1)+".jpg\")");
        $('.module').eq(num).show();
        $('.module').eq(num).siblings('.module').hide();
    }
    function fn() {
        // console.log(arg);
        arg = parseInt(arg);
       change(arg);
    }
    if (!isNaN(arg)){
        fn();
    }




    function showHiden(className) {

        $(className).click(function () {
            if ($(this).siblings().css('display') == 'block') {
                $(this).siblings().hide();
                $(this).children('i').attr('class','glyphicon glyphicon-plus');
            } else {
                $(className + '+ div').each(function () {
                    $(this).hide();
                })
                $(className).each(function () {
                    $(this).children('i').attr('class','glyphicon glyphicon-plus');
                })
                $(this).siblings().show();
                $(this).children('i').attr('class','glyphicon glyphicon-minus');

            }

        });
    }
    showHiden('.job-name');
    showHiden('.item-title');



});