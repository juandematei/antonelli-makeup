(function() {

    $('body').scrollspy({ target: '#mainNav', offset: 86 })

    $(document).scroll(function() {
        var y = $('html').scrollTop();
        if (y > 500) {
          $('#to-top').fadeIn();
        } else {
          $('#to-top').fadeOut();
        }
      });

    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top //no need of parseInt here
            }, 500, 'swing', function () {
                window.location.hash = target;
            });
        });
    });

    $(document).ready(function() {
        var feed = new Instafeed({
            get: 'user',
            userId: 2263540523,
            accessToken: '2263540523.1677ed0.66de72531545464cbe6b9984e9390f04',
            limit: '10',
            template: '<a href="{{link}}" target="_blank"><img class="rounded m-3" src="{{image}}" /></a>',
            resolution: 'thumbnail'
        });
        feed.run();
    });

})();