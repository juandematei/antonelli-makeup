(function() {

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
            userId: '2263540523',
            accessToken: '2263540523.1677ed0.109f5423cfb14c7ebe5a7e91c362ee2f',
            limit: '10',
            template: '<a href="{{link}}" target="_blank"><img class="rounded m-3" src="{{image}}" /></a>',
            resolution: 'thumbnail'
        });
        feed.run();
    });

})();