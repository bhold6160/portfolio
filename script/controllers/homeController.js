'use strict';

(function(module) {
  const homeController = {};

  homeController.init = () => {
    Resume.fetchAll(view.initIndexPage);
    $('#aboutData').hide();
    $('#home').fadeIn(1500);
  };

  module.homeController = homeController;
})(window);
