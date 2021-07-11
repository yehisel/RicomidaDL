//poppers
$(function() {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();
    
    $("#enviarcorreo").click(function(){
        alert("El correo fue enviado exitosamente");
    });
    
    
    $(".card-title").click(function() {
        $(".card-text").toggle(function(){
        });
    })


    $("p#ingredientes").on('dblclick',function(){
        $("#ingredientes").css({'color':'red'});
    })

    $("p#preparación").on('dblclick',function(){
        $("#preparación").css({'color':'red'});
    })


})