'use strict';

(function(module) {
  const aboutController = {};

  aboutController.init = () => {
    $('#home').hide();
    $('#aboutData').fadeIn(1500);
  };

  repos.requestRepos(repoView.index);
  module.aboutController = aboutController;
})(window);
