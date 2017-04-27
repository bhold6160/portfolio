'use strict';

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#aboutData').hide();
    $('#home').fadeIn(1500);
  };

  module.homeController = homeController;
})(window);
