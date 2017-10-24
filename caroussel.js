$(document).ready(function() {
    var indexMax = $('.image').length - 1;
    var index = 0;
    var currentImg = $('.image').eq(index);

    $('.image').css('display', 'none');
    currentImg.css('display', 'block');

    $('#next').click(function(){
        $('.image').eq(index).fadeOut(1000);
        index++;
        if(index > indexMax) {index = 0;}

        currentImg = $('.image').eq(index);
        currentImg.fadeIn(1000);
    });

    $('#prev').click(function(){
        $('.image').eq(index).fadeOut(1000);
        index--;
        if(index < 0) {index = indexMax;}

        currentImg = $('.image').eq(index);
        currentImg.fadeIn(1000);
    });

    setInterval(function(){
        $('.image').eq(index).fadeOut(1000);
        index++;
        if(index > indexMax) {index = 0;}

        currentImg = $('.image').eq(index);
        currentImg.fadeIn(1000);
    }, 3000);
});