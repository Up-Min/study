
/* 우측 상단 모바일 버튼 클릭했을 때 반응하는 것을 제이쿼리로 구현 */



//모바일 햄버거 버튼 클릭시
$(".hamburger").click(function(){
    $(".mobile.hamburger").hide(); //햄버거 버튼 숨기고
    $(".mobile.close").show(); // 메뉴 닫기 버튼 나타내고
    $("#mobile_menu").empty(); // append 해결 : 그래서 누를 때마다 menu를 비워둔다


    // nav에 index에 있는 nav를 복제한다
    var nav = $(".nav").clone()

    // 모바일 메뉴에 복제한 nav를 append로 넣는다 
    // 작동 후
    // 하위태그에 자꾸 쌓이는 문제가 생김
    // 싹 다 날려주고 남기는 방법이 필요함 (9번줄 참고)
    $("#mobile_menu").append(nav)

    // 넣은 append 모바일 메뉴를 보여준다
    $("#mobile_menu").show()

})


// 모바일 햄버거 닫기
    $(".close").click(function(){
    $(".mobile.close").hide(); // 메뉴 닫기 버튼 숨기고
    $(".mobile.hamburger").show(); // 햄버거 버튼 나타내고
    $("#mobile_menu").hide();
})


// 브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지!

$(window).resize(function(){
    var width = $(window).width()
    if(width >= 767){
        if($("#mobile_menu").is(":visible")){
            $(".mobile .close").hide(); 
            $(".mobile .hamburger").show(); 
            $("#mobile_menu").hide();
        }
    }
})


