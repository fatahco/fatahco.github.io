function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){
    $(".menu-icon").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "pink");
    });
});
