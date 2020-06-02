$(function () {
    $('.sidebar-list h3').on('click', function () {
        $('.sidebar-list a').slideToggle(200);
    })
    $('.post h3').on('click', function () {
        $('.post-items').slideToggle(200);
    })
    $('.tags h3').on('click', function () {
        $('.tags a').slideToggle(200);
    })
})
