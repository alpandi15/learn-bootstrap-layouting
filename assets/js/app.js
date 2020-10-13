$(window).scroll(function() {
    $('.navbar').toggleClass('bg-scroller', $(this).scrollTop() > 444)
})
