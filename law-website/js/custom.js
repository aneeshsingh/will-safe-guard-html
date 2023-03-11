$(document).ready(function(){
    $('.owl-review').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4,
            }
        }
    })

    $('.owl-partner').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        dots: true,
        // navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:3
            },
            480:{
                items:4
            },
            768:{
                items:5
            },
            1000:{
                items:6
            },
            1280:{
                items:7
            }
        }
    })
})