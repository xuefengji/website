$(function(){
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;;
    // console.log(screenWidth);
    //导航切换

    if (screenWidth >= 768) {
        $('#li-select li').mouseover(function () {
            let i = $(this).index();
            // console.log(i);
            if (i >0){
                $(this).addClass('current').siblings().removeClass('current');
                $(this).siblings().children('.select').hide();
                $(this).children('.select').show();
            }
        });
        $('#li-select li').mouseout(function () {
            let i = $(this).index();
            // console.log(i);
            if (i > 0){
                $(this).addClass('current').siblings().removeClass('current');
                $(this).removeClass('current');
                $(this).siblings().children('.select').hide();
                $(this).children('.select').hide();
            }

        });
    }
    else {
        $('#li-select li').click(function () {
            let i = $(this).index();
            // console.log(i);
            if (i >0){
                if($(this).children('.select').css('display') == 'none'){
                    $(this).addClass('current').siblings().removeClass('current');
                    $(this).siblings().children('.select').hide();
                    $(this).children('.select').show();
                }
                else {
                    $(this).removeClass('current').siblings().removeClass('current');
                    $(this).siblings().children('.select').hide();
                    $(this).children('.select').hide();
                }

            }

        });
    }




    //返回顶部
    var sTop = $(document).scrollTop();
    if(sTop>500){
        $('.topback').fadeIn(800);
    }

    $(window).scroll(function(){
        var topHeight = $(document).scrollTop();
        // console.log(topHeight);
        if( topHeight> 100){
            $('.topback').fadeIn(800);
        }else{
            $('.topback').fadeOut(1200);
        }
    });
    $(".topback").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });
});