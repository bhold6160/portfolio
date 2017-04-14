'use strict'

var resumeArr = [];
var schoolArr = [];
var view = {};

//Constructor function
function Resume(dataOb) {
  this.name = dataOb.name;
  this.location = dataOb.location;
  this.dates = dataOb.dates;
  this.position = dataOb.position;
  this.description = dataOb.description;
};

Resume.prototype.aboutMe = function () {
  var newAbout = $('.data').clone();
  newAbout.removeClass('data');
  newAbout.find('h1').html(this.name);
  newAbout.find('#locationId').html(this.location);
  newAbout.find('#datesId').html(this.dates);
  newAbout.find('#positionId').html(this.position);
  newAbout.find('.article-body').html(this.description);
  return newAbout;
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

  $('.main-nav .tab:first').click();
};

$(document).ready(function () {
  view.handleNav();
});
