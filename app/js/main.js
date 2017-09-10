
;($(document).ready(function(){

        $(window).scroll(function(){
            if($(this).scrollTop()){
                $('nav').addClass('fixed');
            }
            else if ($(this).scrollTop()<100){
                $('nav').removeClass('fixed');
            }
        });

        $("nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top - 135}, 1500);
        });
        $(".shop").find("button").hover(function(){
            $(this).toggleClass("text-shadow");
            $(this).parents(".table").find(".table-caption").toggleClass("text-shadow");
        })
})
)
