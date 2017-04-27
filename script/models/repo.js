'use strict';

(function (module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function (callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then(data => repos.all = data)
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
