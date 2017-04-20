'use strict'

let resumeArr = [];
let schoolArr = [];
const view = {};

//Constructor function
function Resume(dataObj) {
  this.title = dataObj.title;
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
  this.position = dataObj.position;
  this.description = dataObj.description;
};

// Resume.all = [];

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

  $('.top-nav .tab:first').click();
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
    view.initIndexPage();
  });

// Resume.loadALL = function (rawData) {
//   rawData.sort(function (a, b) {
//     return (new Resume);
//   });
//
//   rawData.forEach(function (el) {
//     Resume.all.push(new Resume(el));
//   });
// };

Resume.fetchAll = function() {
  if (localStorage.rawDataObj) {
    Resume.initIndexPage(JSON.parse(localStorage.rawDataObj));
    view.initIndexPage();
  } else {
    $.getJSON('data/objects.json').then(function(rawDataObj){
      Resume.initIndexPage(rawDataObj);
      localStorage.setItem('rawDataObj', JSON.stringify(rawDataObj));
      Resume.initIndexPage();
    });
  }
};
