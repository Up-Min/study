var mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.50283651524054, 127.0256892790612), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

var iwContent =
    '<div style="text-align:center; font-size:10px;"> SHAKE SHACK 강남 </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(37.50283651524054, 127.0256892790612), //인포윈도우 표시 위치입니다
  iwRemoveable = false; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성하고 지도에 표시합니다
var infowindow = new kakao.maps.InfoWindow({
  map: map, // 인포윈도우가 표시될 지도
  position: iwPosition,
  content: iwContent,
  removable: iwRemoveable,
});

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 300) {
    $('.mapAround').fadeIn();
  } else {
    $('.mapAround').fadeOut();
  }
});
