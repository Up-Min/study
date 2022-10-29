
var cityList= ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(".temp").each(function(i){
    // 지역리스트 6개, span도 6개. 그냥 돌리면 된다
    var temp = getCurrentTemp(cityList[i])
    
    // URL 적용
    var iconURL = "https://openweathermap.org/img/wn/"

    /* 현재 이벤트가 발생하는 요소인 this를 돌려 */
    $(this).text(temp.celsius + "℃")

    /* 태그의 속성값을 바꿔주는 attr */
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png")
    
})

$(".location").on({
    "click" : function(){
        // 클릭할 .location이 클릭됐을 때를 적용함
        var q = $(this).children(".q").attr("id")
        // 선택한 q값에 따라 url의 뒷쪽이 추가 됨. (쿼리스트링이 만들어짐)
        var redirectURL = "pages/weather_location.html?q=" + q;
        location.href = redirectURL

        //url 데이터가 들어왔으니까 그 시티의 값을 기반으로 다시 API를 해준다. 그리고 또 바인딩을 해준다.
        
    },


})