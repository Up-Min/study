
/* nav 메뉴별 name 전환  */

$('.move__Bur').mouseover(function(){
    $('.move__Bur__EN').css('opacity', '0')
    $('.move__Bur__KO').css('opacity', '1')
    
})
$('.move__Bur').mouseout(function(){
    $('.move__Bur__EN').css('opacity', '1')
    $('.move__Bur__KO').css('opacity', '0')
})

$('.move__Chc').mouseover(function(){
    $('.move__Chc__EN').css('opacity', '0')
    $('.move__Chc__KO').css('opacity', '1')
})
$('.move__Chc').mouseout(function(){
    $('.move__Chc__EN').css('opacity', '1')
    $('.move__Chc__KO').css('opacity', '0')
})

$('.move__Ftg').mouseover(function(){
    $('.move__Ftg__EN').css('opacity', '0')
    $('.move__Ftg__KO').css('opacity', '1')
})
$('.move__Ftg').mouseout(function(){
    $('.move__Ftg__EN').css('opacity', '1')
    $('.move__Ftg__KO').css('opacity', '0')
})

$('.move__Sid').mouseover(function(){
    $('.move__Sid__EN').css('opacity', '0')
    $('.move__Sid__KO').css('opacity', '1')
})
$('.move__Sid').mouseout(function(){
    $('.move__Sid__EN').css('opacity', '1')
    $('.move__Sid__KO').css('opacity', '0')
})

$('.move__Cus').mouseover(function(){
    $('.move__Cus__EN').css('opacity', '0')
    $('.move__Cus__KO').css('opacity', '1')
})
$('.move__Cus').mouseout(function(){
    $('.move__Cus__EN').css('opacity', '1')
    $('.move__Cus__KO').css('opacity', '0')
})

$('.move__Cct').mouseover(function(){
    $('.move__Cct__EN').css('opacity', '0')
    $('.move__Cct__KO').css('opacity', '1')
})
$('.move__Cct').mouseout(function(){
    $('.move__Cct__EN').css('opacity', '1')
    $('.move__Cct__KO').css('opacity', '0')
})

$('.move__Drk').mouseover(function(){
    $('.move__Drk__EN').css('opacity', '0')
    $('.move__Drk__KO').css('opacity', '1')
})
$('.move__Drk').mouseout(function(){
    $('.move__Drk__EN').css('opacity', '1')
    $('.move__Drk__KO').css('opacity', '0')
})

$('.move__Bft').mouseover(function(){
    $('.move__Bft__EN').css('opacity', '0')
    $('.move__Bft__KO').css('opacity', '1')
})
$('.move__Bft').mouseout(function(){
    $('.move__Bft__EN').css('opacity', '1')
    $('.move__Bft__KO').css('opacity', '0')
})

$('.move__Wof').mouseover(function(){
    $('.move__Wof__EN').css('opacity', '0')
    $('.move__Wof__KO').css('opacity', '1')
})
$('.move__Wof').mouseout(function(){
    $('.move__Wof__EN').css('opacity', '1')
    $('.move__Wof__KO').css('opacity', '0')
})


/* 메뉴별 자세히 보기 설정 */

$('.seeDetails').click(function(){
    $(this).next().slideToggle(500)
    $(this).next().siblings(Down).slideUp();
})

// $('.seeDetails_1').click(function(){
//     $('.Hamburger__Down').toggle()
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
// })

// $('.seeDetails_2').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').toggle()
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
// })
// $('.seeDetails_3').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').toggle()
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
// })
// $('.seeDetails_4').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').toggle()
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
// })
// $('.seeDetails_5').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').toggle()
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
// })
// $('.seeDetails_6').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').toggle()
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
// })
// $('.seeDetails_7').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').toggle()
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').css('display','none')
//     $('body').css('display','fixed')
// })
// $('.seeDetails_8').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').toggle()
//     $('.Woof__Down').css('display','none')
// })
// $('.seeDetails_9').click(function(){
//     $('.Hamburger__Down').css('display','none')
//     $('.Chicken__Down').css('display','none')
//     $('.Flat-top-dogs__Down').css('display','none')
//     $('.Side__Down').css('display','none')
//     $('.Custard__Down').css('display','none')
//     $('.Concretes__Down').css('display','none')
//     $('.Drinks__Down').css('display','none')
//     $('.Breakfast__Down').css('display','none')
//     $('.Woof__Down').toggle()
// })


