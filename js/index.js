
$(function () {
    $('.product a').mouseover(function () {
        var i = $(this).index();
        console.log(i);
        $('.banner-inner').eq(i).siblings().removeClass('current-banner');
        $('.banner-inner').eq(i).addClass('current-banner');
    });
    //轮播图
    var mySwiper = new Swiper( '.swiper-container', {
        direction: 'horizontal',
        autoplay: 8000,
        speed: 300,
        loop: true,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        pagination: '.swiper-pagination',
        paginationType: 'custom',
        paginationCustomRender: function ( swiper, current, total ) {
            var _html = '';
            for ( var i = 1; i <= total; i++ ) {
                if ( current == i ) {
                    _html += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                    _html += '<span class="swiper-pagination-customs"></span>';
                }
            }
            return _html; //返回所有的页码html
        },
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        onReachEnd: function ( swiper ) {
            console.log( '到了最后一个slide' );
        },
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    } );
});



