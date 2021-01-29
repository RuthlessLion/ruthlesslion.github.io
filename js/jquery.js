$(function(){
    $(".hello").fadeTo(1500, 1);
    $(".hello2").fadeTo(2000, 1);
    $(".hello").fadeOut(1500, 0);
    $(".hello2").fadeOut(1000, 0);

    setTimeout(function(){
        $(".contact").fadeTo(1500, 1);
    },3000);
});
