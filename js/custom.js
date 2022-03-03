(function ($) {
  'use strict';
  var POTENZA = {};

  /*************************
  Predefined Variables
*************************/
  var $window = $(window);
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*************************
        Preloader
*************************/
  POTENZA.preloader = function () {
    $('#load').fadeOut();
    $('#pre-loader').delay(0).fadeOut('slow');
  };

  /****************************************************
     POTENZA Window load and functions
****************************************************/
  //Window load functions
  $window.on('load', function () {
    POTENZA.preloader();
  });
})(jQuery);
