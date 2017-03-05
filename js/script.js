$(function () {

  var $links = $('.tabs-menu_link');
  var $tabsContent = $('#content1, #content2, #content3');

  $links.on('click', function(e) {
    e.preventDefault();

    if ($(this).attr('id') === 'link1') {
      $links.removeClass('active');
      $(this).addClass('active');

      $tabsContent.addClass('hide');
      $(content1).removeClass('hide');

    } else if ($(this).attr('id') === 'link2') {
        $links.removeClass('active');
        $(this).addClass('active');

        $tabsContent.addClass('hide');
        $(content2).removeClass('hide');

    } else if ($(this).attr('id') === 'link3') {
        $links.removeClass('active');
        $(this).addClass('active');

        $tabsContent.addClass('hide');
        $(content3).removeClass('hide');
      }
    });

    $('.hint').hover(
        function () {
          $(this).next('.help').animate({opacity: 'show'}, 'fast');
        }, function () {
            $(this).next('.help').animate({opacity: 'hide'}, 'fast');
        });

    $('#show-help').on('click', function () {
        $('.help').animate({opacity: 'show'}, 'fast');
    });
  })
