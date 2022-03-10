$(function(){





    $(".menu_comida").click( function(){
        console.log("ver clics")
        $(".todos").removeClass("open");
     
        var id = $(this).attr("id"); 
        
        $(".todos--"+id).addClass("open")
        $(".menu_comida").removeClass("color");
        $(this).addClass("color");
    });
    


    $(".pide").click(function(){
        console.log("clic pide");

           $(".new").toggleClass("abrir");
            $(".fondo").toggleClass("aparece");
           });
           $(".fondo").click(function(){
               
            $(".new").toggleClass("abrir")
            $(".fondo").toggleClass("aparece");

            });


});