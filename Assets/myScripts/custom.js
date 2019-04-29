$(function () {
    //slider
    var slider_items = $('.slider-item ul.slider-item-container > li');
    slider_items.filter(':not(:first)').hide();
    slider_items.filter(':first').addClass('active');
});

function changeSlider(to) {
    $(".sayfaSlider").fadeOut(500).removeClass('active');
    $("#" + to).fadeIn(500).addClass('active');
}

function changeSliderButton(to) {
    $(".clickSlider").removeClass('active');
    $("#" + to).addClass('active');
}