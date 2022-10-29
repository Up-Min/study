
/* 전체주소 먼저 가져오기 */

var currentURL = location.href // 주소를 전부 가져옴
var urlObj = new URL(currentURL) //js에서 지원하는 URL 에 주소를 넣어줌
                                    // 주소를 객체로 만들어줌
var params = urlObj.searchParams

//쿼리스트링 값을 가져오는 get
var q = params.get("q")


// q값을 forcast.js에 있던 getCurrentWeather에 적용
var result = getCurrentWeather(q)

// result에 weather의 값이 나오게 됨. 이제 바인딩만 해주면 된다.

$("#temp").text(result.main.temp + "℃")
$("#wind").text(result.wind.speed + "m/s")
$("#humidity").text(result.main.humidity + "%")
