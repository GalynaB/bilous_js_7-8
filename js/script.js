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

  $(function () {

    var $input = $('#name, #surname, #address');
    var $help = $('#help-name, #help-surname, #help-address');

    $input.mouseover(function(e) {

      if ($(this).attr('id') === 'name') {

        $help.addClass('hide');
        $('#help-name').removeClass('hide');

      } else if ($(this).attr('id') === 'surname') {

          $help.addClass('hide');
          $('#help-surname').removeClass('hide');

      } else if ($(this).attr('id') === 'address') {

          $help.addClass('hide');
          $('#help-address').removeClass('hide');

      }
    });
  });

  $('#show-help').click(function() {
    $('#help-name').removeClass('hide');
    $('#help-surname').removeClass('hide');
    $('#help-address').removeClass('hide');
  });
});
