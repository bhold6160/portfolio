'use strict'

let resumeArr = [];
let schoolArr = [];
const view = {};

function Resume(dataObj) {
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
  this.position = dataObj.position;
  this.description = dataObj.description;
  this.category = dataObj.category;
};

function School(dataObj) {
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
  this.category = dataObj.category;
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
      if (resume.category === 'resume') {
        $('#aboutData').append(resume.aboutMe());
      }
    });

    rawDataObj.forEach(function (schoolObject) {
      schoolArr.push(new School(schoolObject));
    });

    schoolArr.forEach(function (school) {
      if (school.category === 'school') {
        $('#schoolData').append(school.aboutMe());
      }
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
