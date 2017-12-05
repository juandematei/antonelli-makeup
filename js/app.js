(function() {

    $(document).scroll(function() {
        var y = $('html').scrollTop();
        if (y > 500) {
          $('#to-top').fadeIn();
        } else {
          $('#to-top').fadeOut();
        }
      });

    $(document).ready(function() {
        $('#to-top').click(function() {
            $('html').animate({scrollTop: 0}, 500);
        });
    });

    $(document).ready(function() {
        var feed = new Instafeed({
            get: 'user',
            userId: '2263540523',
            accessToken: '2263540523.1677ed0.109f5423cfb14c7ebe5a7e91c362ee2f',
            limit: '10',
            template: '<a href="{{link}}" target="_blank"><img class="rounded m-3" src="{{image}}" /></a>'
        });
        feed.run();
    });

})();