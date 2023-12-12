let clicks=0
let boost_click=1
let img="https://cdn-icons-png.flaticon.com/512/541/541732.png"
let bk="https://avatars.mds.yandex.net/i?id=47bb0f98563670a458ad77f69e750403e25e8497-6339443-images-thumbs&n=13"
$(document).ready(function(){
    clicks = +localStorage.getItem('value')
    $('.clicks').text( `Кликов: ${clicks}`)

    img=localStorage.getItem('image',img)
    $(".target").css({"background":`url(${img})`, "background-size": "100% 100%"})

    bk =  localStorage.getItem('bk',bk)
    $('.game').css({'background':`url(${bk})`,
    'background-size':'100% 100%'})
})

$('.target').click(function(){
    clicks=+(clicks+(1*boost_click))
    $('.clicks').text( `Clicks: ${clicks}`)
    localStorage.setItem('value',clicks)
})

$('.ad').click(function(){

    $('.target').hide()
    $('iframe').show()
    let boost=setTimeout(function(){
        $('.target').show()
        $('iframe').hide()
        boost_click=5
    }, 10000)

    let endboost=setTimeout(function(){
        boost_click=1
    }, 20000)
})

$(".btn_shop").click(function(){
    $(".shop").slideDown("slow")
    $('#balance').text( `Доступно: ${clicks}`)
})

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true
  });
 
  $('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });

$("#back").click(function(){
    $(".shop").slideUp("slow")
})

$("#img1_buy").click(function(){
    let price=+$("#img1_price").text()

    if(clicks>=price){
        img=$("#img1").attr("src")
        clicks -=price

        $('#balance').text( `Доступно: ${clicks}`)
        localStorage.setItem('value',clicks)
        $('.clicks').text( `Clicks: ${clicks}`)
        $(".target").css({"background":`url(${img})`, "background-size": "100% 100%"})

        localStorage.setItem('image',img)
    }
    else{
        alert("NO")
    }
  })


  $("#bk1_buy").click(function(){
    let price=+$("#bk1_price").text()

    if(clicks>=price){
        bk=$("#bk1").attr("src")
        clicks -=price

        $('#balance').text( `Доступно: ${clicks}`)
        localStorage.setItem('value',clicks)
        $('.clicks').text( `Clicks: ${clicks}`)
        $(".game").css({"background":`url(${bk})`, "background-size": "100% 100%"})

        localStorage.setItem('bk',bk)
    }
    else{
        alert("NO")
    }
  })
