var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=e88915e2f6a3faea10fbdb3c1f58eda2"
url += "&units=metric"
url += "&lang=kr"
url += "&q="
/* 이름을 나중에 일일이 수정하는 것을 방지하기 위해 url을 분리 해서 넣어줌 */


/* 현재 날씨의 모든 정보를 가져오는 */
function getCurrentWeather(city){
    var dataObj;
    var openweatherAPI=url;
    /* ajax 실행 */
    $.ajax({
        type:"GET", //서버에다가 get방식을 요청함
        url:openweatherAPI += city,
        dataType:"json",//json으로 자료를 받겠다는 소리
        async:false, //비동기 false - > 동기? 순차적. A 자료를 요청하고 오기 전까지 기다려야함.
                        // 한꺼번에 빨리빨리 되지는 않는다 (동기가)
                        // 비동기 : 순서에 상관없이 빨리빨리 한번에 가져감
                        // 근데 왜 동기로 했는가? 결과 데이터 값을 정확히 return 받아야하기 때문에.
        success:function(data) { // API call, 자료 받는 것이 성공했을 경우
            dataObj=data;
        },
        error:function(request, status, error) {
            console.log(request, status, error);
        },
    })
    return dataObj;
}

/* 지역별 온도를 얻어오는 */
function getCurrentTemp(city){
    var temp = {}
    var openweatherAPI = url
    $.ajax({
        type:"GET", 
        url:openweatherAPI += city,
        dataType:"json",
        async:false, 
        success:function(data) { 
            temp.celsius = data.main.temp.toFixed(0) // 온도
            temp.icon = data.weather[0].icon;
        },
        error:function(request, status, error) {
            console.log(request, status, error);
        },
    })
    return temp
}