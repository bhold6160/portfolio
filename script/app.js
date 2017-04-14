'use strict'

var resumeArr = [];
var schoolArr = [];
var view = {};

//Constructor function
function Resume(dataObj) {
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
  this.position = dataObj.position;
  this.description = dataObj.description;
  this.lorem = dataObj.lorem;
};

Resume.prototype.aboutMe = function () {
  var aboutSource = $('#template').html();
  var aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};

resumeRawData.forEach(function (resumeObject) {
  resumeArr.push(new Resume(resumeObject));
});

resumeArr.forEach(function (resume) {
  $('#aboutData').append(resume.aboutMe());
});

schoolRawData.forEach(function (schoolObject) {
  schoolArr.push(new Resume(schoolObject));
});

schoolArr.forEach(function (school) {
  $('#schoolData').append(school.aboutMe());
});

view.handleNav = function () {
  $('.top-nav .tab').on('click', function () {
    $('.tab-content').hide();
    $('.tab-content[id="' + $(this).attr('data-content') + '"]').show();
  });

  $('.top-nav .tab:first').click();
};

$(document).ready(function () {
  view.handleNav();
});
