'use strict';

(function(module) {
  const homeController = {};

  homeController.init = () => {
    $('#aboutData').hide();
    $('#home').fadeIn(1500);
  };

  repos.requestRepos(repoView.index);
  module.homeController = homeController;
})(window);
