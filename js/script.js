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
    /**
     * Blog UI Script Initialize.
     */
    blog.init();
})

const blog = {
    init: function () {
        blog.toggleSlideMenu()
        blog.getScroll()
        blog.backTop()
        blog.visualSlide();
    },
    toggleSlideMenu: function () {
        $('.sidebar-item').on('click', function () {
            $(this).find('ul, .tags-list').slideToggle();
        })
    },

    getScroll: function () {
      $(window).on('scroll', function () {
            const scrollTop = $(Window).scrollTop();
            const visualHeight = $('.visual').innerHeight();
            if(scrollTop > 100) {
                $('html').addClass('get-scroll')
            } else {
                $('html').removeClass('get-scroll')
            }
          if(scrollTop > visualHeight) {
              $('html').addClass('show-header')
          } else {
              $('html').removeClass('show-header')
          }
      })
    },




    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            })
        })
    }



}