//    1. 서브메뉴 관련 

    const menu = document.querySelector(".menu__main") //전체 메뉴
    const subMenus = document.querySelectorAll('.list__drop') //하위 메뉴
    const panel = document.querySelector('.header__panel') // 하위메뉴 활성시 하얀 판넬
    const header = document.querySelector('.header') // 전체 헤더
    
    // 메뉴에 마우스 올리면 나타나는 하위 메뉴,
    // 메뉴에 마우스 hover일때 작동하므로, event 넣어줘야함.
    menu.addEventListener('mouseover',function(){
        panel.style.display = 'block';
        subMenus.forEach(function(subMenu){
            subMenu.style.display = 'block';
        })
    })

    // 하위메뉴 숨기기
    header.addEventListener('mouseout', function(){
        panel.style.display = 'none';
        subMenus.forEach(function(subMenu){
            subMenu.style.display = 'none';
    })
})

    panel.addEventListener('mouseout', function(){
        panel.style.display = 'none';
        subMenus.forEach(function(subMenu){
            subMenu.style.display = 'none';
    })
})





//    2. 모바일 버전 메뉴 보이기, 숨기기
   const Mhamburger = document.querySelector('.mobile.hamburger') 
   const Mclose = document.querySelector('.mobile.close') // 닫기버튼
   const Mnav = document.querySelector('.header__Mnav') // 모바일 전체
                                //header.Mnav?

   // 햄버거 버튼을 누르면 모바일 버튼 전체가 보임
   Mhamburger.addEventListener('click',function(){
    Mnav.style.display = 'block'
   })

   Mclose.addEventListener('click',function(){
    Mnav.style.display = 'none'
   })



//    3. 모바일 하위 메뉴 보이기-숨기기

function showHide(e){
    // 토글기능 구현
    const MListDrop = e.children[2]; //선택한 메뉴의 하위메뉴 가져옴
    // 하위메뉴가 보이면 안보이게, 안보이면 보이게!
    // const displayAttr = MListDrop.style.display; //none, block 여부 확인가능
    const displayAttr = window.getComputedStyle(MListDrop).display;
        // MListDrop의 display속성을 가져온다!

        if(displayAttr === 'none'){
            MListDrop.style.display = 'block';
        } else{
            MListDrop.style.display = 'none';
        }
}

    // throttle("resize","optimizedResize");


//    4. width가 767px 이상일 때 모바일 메뉴 보임 방지

    //resize event를 쓰면 된다
    window.addEventListener('resize',function(){
        let winWidth = window.innerWidth
        if(winWidth >= 767){
            Mnav.style.display = 'none'
        }
    })

