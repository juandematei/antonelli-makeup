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

})();