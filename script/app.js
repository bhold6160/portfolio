'use strict'

let resumeArr = [];
let schoolArr = [];
const view = {};

function Resume(dataObj) {
  this.title = dataObj.title;
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
  this.position = dataObj.position;
  this.description = dataObj.description;
};

function School(dataObj) {
  this.title = dataObj.title;
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
}

Resume.prototype.aboutMe = function () {
  let aboutSource = $('#template-resume').html();
  let aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};

School.prototype.aboutMe = function () {
  let aboutSource = $('#template-school').html();
  let aboutTemplate = Handlebars.compile(aboutSource);
  return aboutTemplate(this);
};

view.handleNav = function () {
  $('.top-nav .tab').on('click', function () {
    $('.tab-content').hide();
    $('.tab-content[id="' + $(this).attr('data-content') + '"]').fadeIn(1500);
  });
};

view.initIndexPage = function (rawDataObj) {
    rawDataObj.forEach(function (resumeObject) {
      resumeArr.push(new Resume(resumeObject));
    });

    resumeArr.forEach(function (resume) {
      $('#aboutData').append(resume.aboutMe());
    });

    rawDataObj.forEach(function (schoolObject) {
      schoolArr.push(new School(schoolObject));
    });

    schoolArr.forEach(function (school) {
      $('#schoolData').append(school.aboutMe());
    });
  };

$(document).ready(function () {
    view.handleNav();
    Resume.fetchAll();
    $('.top-nav .tab:first').click();
  });

Resume.fetchAll = function () {
  if (localStorage.rawDataObj) {
    view.initIndexPage(JSON.parse(localStorage.rawDataObj));
  } else {
    $.getJSON('data/objects.json').then(rawDataObj => {
      view.initIndexPage(rawDataObj);
      localStorage.setItem('rawDataObj', JSON.stringify(rawDataObj));
    });
  }
};
