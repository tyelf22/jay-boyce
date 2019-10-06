var $animation_elements = $('.scroller');
var $window = $(window);

$window.on('scroll', check_if_in_view);

$window.on('scroll resize', check_if_in_view);

$window.trigger('scroll');

var flag = true;

flagger = () => {
    var count = 0;
    count++;
      if (count <= 2) {
          return true;
      }
      else{
          return false;
      }
};


function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position && flag == true)) {
        $element.addClass('animated fadeInLeft vis');
        flag = flagger();
        
        
      } else {

      }
    });
  }


