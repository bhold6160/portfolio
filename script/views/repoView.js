'use strict';

(function (module) {
  const repoView = {};

  repoView.index = function () {
    let source = $('#repo-template').html();
    let templateRender = Handlebars.compile(source);

    $('#home').append(
      repos.with('name').map(templateRender)
    );
  };

  module.repoView = repoView;
})(window);
