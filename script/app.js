'use strict'

let resumeArr = [];
let schoolArr = [];

//Constructor function
function Resume(dataObj) {
  this.title = dataObj.title;
  this.name = dataObj.name;
  this.location = dataObj.location;
  this.dates = dataObj.dates;
  this.position = dataObj.position;
  this.description = dataObj.description;
};

Resume.all = [];

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

// resumeRawData.forEach(function (resumeObject) {
//   resumeArr.push(new Resume(resumeObject));
// });
//
// resumeArr.forEach(function (resume) {
//   $('#aboutData').append(resume.aboutMe());
// });
//
// schoolRawData.forEach(function (schoolObject) {
//   schoolArr.push(new School(schoolObject));
// });
//
// schoolArr.forEach(function (school) {
//   $('#schoolData').append(school.aboutMe());
// });

Resume.loadALL = function (rawData) {
  rawData.sort(function (a, b) {
    return (new Resume);
  });

  rawData.forEach(function (el) {
    Resume.all.push(new Resume(el));
  });
};

Resume.fetchAll = function() {
  if (localStorage.rawData) {
    Resume.loadAll(JSON.parse(localStorage.rawData));
    appView.initIndexPage();
  } else {
    $.getJSON('data/objects.json').then(function(rawData){
      Resume.loadAll(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
      Resume.initIndexPage();
    });
  }
};
