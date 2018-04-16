$(function(){
    $(".hello").fadeTo(1500, 1);
    $(".hello").fadeOut(1500, 0);

    setTimeout(function(){
        $(".contact").fadeTo(1500, 1);
    },3000);
});
