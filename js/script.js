//window.addEventListener('load',function(){}
window.onload = function(){
    //변수들 선언 초기화
    const header = this.document.querySelector('header');
    const hMenu = this.document.querySelector('.hMenu');
    const topSearch = this.document.querySelector('.topSearch');
    const srch = this.document.querySelector('.topSearch .srch');
    const close = this.document.querySelector('.topSearch .close');
    const aside = this.document.querySelector('.aside');
    const btnTop = this.document.querySelector('.btnTop');


    //hMenu에 마우스가 들어가면
    hMenu.onmouseenter = function(){
        header.classList.add('open');
    }

    //header 에서 마우스가 떠나면
    header.onmouseleave = function(){
        header.classList.remove('open');
    }

    //srch를 클릭하면 topSearch에 open클래스 적용
    srch.onclick = function(){
        topSearch.classList.add('open');
    }
    
    //srch를 마우스가 떠나면 topSearch에 open클래스 제거
    close.onclick = function(){
        topSearch.classList.remove('open');
    }
    
    //window가 스크롤 되면 aside 나타내고 없애기
    window.onscroll = function(){
        let position = this.document.querySelector('html').scrollTop

        if(position >= 100){
            aside.style.display = 'block'
        }else{
            aside.style.display = 'none'
        }
        aside.style.opacity = position/300
    }

    //btnTop 클릭하면 윈도우 맨 위로 올라가기
    btnTop.onclick = function(){
        window.scrollTo({
            top : 0 , 
            left : 0,
            behavior : 'smooth'
        });
    }


    //스와이퍼 슬라이드
    var swiper = new Swiper(".mainSlide", {
        autoplay:{
            delay: 2500, // 시간 설정
            loop: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true, //클릭 설정
          },

      });
}