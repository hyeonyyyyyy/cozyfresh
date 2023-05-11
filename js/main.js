$(function(){
    AOS.init({
      duration:1300,
    });

    // 헤더 투명
    const headerEl = document.querySelector('header');

        window.addEventListener('scroll', function(){
          if (window.scrollY > 10){
            headerEl.classList.add('bg');
          } else {
            headerEl.classList.remove('bg'); 
          }  
        });

    // 메인슬라이드
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mainSwiper", {
      loop:true,
      speed: 2000,
      centeredSlides: true,
      effect : 'fade',
      autoplay: {
        delay: 5500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
    
    // value슬라이드
    var swiper = new Swiper(".valueSwiper", {
      loop:true,
      effect : 'fade',
      fadeEffect: { 
        crossFade: true 
        },
      speed: 1000,
      allowTouchMove : false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    // 검색하기
    var $tablink = $(".tabTitle li").click(function(){
      var idx=$tablink.index(this);
      $(".tabTitle li").removeClass("on active")
      $(".tabTitle li").eq(idx).addClass("no active");
      $(".tabCont > div").hide();
      $(".tabCont > div").eq(idx).show();

    })
    $(".tab-title li").click(function(){
      var idx = $(this).index();
      $(".tab-title li").removeClass("on active");
      $(".tab-title li").eq(idx).addClass("on active");
      $(".tab-cont > div").hide();
      $(".tab-cont > div").eq(idx).show();
    });

    $('a').click(function(e){
      e.preventDefault();
  });

  
  // 팝업
  $('.ham').click(function(){
    $('.popup-nav').show({'right':0});
    $('.popup-nav').animate({'right':0});
    // 화면 스크롤 막음
    $('html,body').css('overflow-y','hidden');
  });
  //팝업 메뉴의 닫기 버튼을 클락하면 팝업 메뉴가 왼쪽으로 들어감
  $('.close').click(function(){
    $('.popup-nav').animate({'right':'-110vw'})
    //윈도우의 화면 스크롤 활성화
    $('html,body').css('overflow-y','visible');

  });
});