'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('#home').hide();
    $('#aboutData').fadeIn(1500);
  };

  module.aboutController = aboutController;
})(window);
