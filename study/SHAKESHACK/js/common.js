

$('.seeDetails').click(function(){
    $('.Menu__Down').toggle()
})

$('.toHead').click(function(){
    window.scrollTo(0, 0);
})

$('.toHead').mouseover(function(){
    $('.toHead').css('color','red')
})

$('.toHead').mouseout(function(){
    $('.toHead').css('color','black')
})

$('.move__Burger').click(function(){
    window.scrollTo('.menuDetails__Hamburger');
})
$('.move__Chicken').click(function(){
    $('.menuDetails__Chicken').focus();
})
$('.move__Flat-top-dogs').click(function(){
    window.scrollTo(952, 952);
})
$('.move__Side').click(function(){
    window.scrollTo(952, 952);
})
$('.move__Custard').click(function(){
    window.scrollTo(952, 952);
})
$('.move__Concretes').click(function(){
    window.scrollTo(952, 952);
})
$('.move_Breakfast').click(function(){
    window.scrollTo(952, 952);
})
$('.move_Woof').click(function(){
    window.scrollTo(952, 952);
})