$(function(){
    $(".gnb>li:not('.search')").hover(function(){
        $('.lnb').stop().slideToggle();
        $('.lnbbox').stop().slideToggle();
    })

    $('.search').click(function(){
        $(this).css('display', 'none');
        $('.lnb').css('opacity', '0');
        $('.lnbbox').css('opacity', '0');
        $('.close').css('display', 'block');
        $('.searchbox').css('display', 'block');
    })
    $('.close').click(function(){
        $(this).css('display', 'none');
        $('.lnb').css('opacity', '1');
        $('.lnbbox').css('opacity', '1');
        $('.search').css('display', 'block');
        $('.searchbox').css('display', 'none');
    })

    $('.company-s').click(function(){
        $(this).css('border', '1px solid #000');
    })


    // 스크롤 감지
    

    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height > 0){
            $('header').css('background', 'rgba(255,255,255,1)');  
            $('header').css('border-bottom', '1px solid #ededed'); 
            $('header').css('position', 'fixed');
        }if(height == 0){
            $('header').css('background', 'rgba(255,255,255,0)');
            $('header').css('border-bottom', 'none'); 
            $('header').css('position', 'absolute');
        }
        console.log(height);
    });
});
