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

    $('#c_box').click(function(){
        $('#c_angle').toggleClass('act');
        $('#c_list_scroll').toggleClass('d-none');
        $('#j_list_scroll').addClass('d-none');
        $('#j_angle').removeClass('act');
        $('#s_list_scroll').addClass('d-none');
        $('#s_angle').removeClass('act');
    })
    
    $('#j_box').click(function(){
        $('#j_angle').toggleClass('act');
        $('#j_list_scroll').toggleClass('d-none');
        $('#c_list_scroll').addClass('d-none');
        $('#c_angle').removeClass('act');
        $('#s_list_scroll').addClass('d-none');
        $('#S_angle').removeClass('act');
    })

    $('#s_box').click(function(){
        $('#s_angle').toggleClass('act');
        $('#s_list_scroll').toggleClass('d-none');
        $('#c_list_scroll').addClass('d-none');
        $('#c_angle').removeClass('act');
        $('#j_list_scroll').addClass('d-none');
        $('#j_angle').removeClass('act');
    })
    
    $('.list>li').click(function(){
        $('.list>li').removeClass('selected');
        $(this).addClass('selected');
    })

    // 데이터 받기
    const comvalue = document.querySelector('#c_value span');
    const comlist = document.querySelectorAll('#c_list li');
    const jobvalue = document.querySelector('#j_value span');
    const joblist = document.querySelectorAll('#j_list li');
    const servalue = document.querySelector('#s_value span');
    const serlist = document.querySelectorAll('#s_list li');

    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect1 = (item1) => {
        comvalue.innerHTML = item1.textContent;
    }
    const handleSelect2 = (item2) => {
        jobvalue.innerHTML = item2.textContent;
    }
    const handleSelect3 = (item3) => {
        servalue.innerHTML = item3.textContent;
    }

    // 옵션 클릭시 클릭한 옵션을 넘김
    comlist.forEach(option1 => {
        option1.addEventListener('click', () => handleSelect1(option1))
    })
    joblist.forEach(option2 => {
        option2.addEventListener('click', () => handleSelect2(option2))
    })
    serlist.forEach(option3 => {
        option3.addEventListener('click', () => handleSelect3(option3))
    })

    $('#family').click(function(){
        $('.fa-angle-up').toggleClass('act');
        $('.f_list_scroll').toggleClass('d-none');
    })

    $('.top').on('click', function(){
        $('html, body').stop().animate({scrollTop: 0}, 500);
    })


    // 스크롤 감지
    

    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height > 0){
            $('header').css('background', 'rgba(255,255,255,1)');  
            $('header').css('border-bottom', '1px solid #ededed'); 
            $('header').css('position', 'fixed');
            $('.top').css('position', 'fixed');
            $('.top').addClass('opacity');
        }if(height > 3300){
            $('.top').css('position', 'absolute');
        }if(height == 0){
            $('header').css('background', 'rgba(255,255,255,0)');
            $('header').css('border-bottom', 'none'); 
            $('header').css('position', 'absolute');
            $('.top').removeClass('opacity');
        }
        console.log(height);
    });
});
