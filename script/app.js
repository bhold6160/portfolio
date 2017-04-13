'use strict'

var resumeArr = [];

//Constructor function
function Resume(resumeDataObj) {
  this.name = resumeDataObj.name;
  this.location = resumeDataObj.location;
  this.dates = resumeDataObj.dates;
  this.position = resumeDataObj.position;
  this.description = resumeDataObj.description;
}

Resume.prototype.aboutMe = function() {
var newAbout = $('#aboutTemplate').html();
var aboutTemplate = Handlebars.compile(newAbout);
return aboutTemplate(this);

// newAbout.find('h1').text(this.name);
// newAbout.find('#locationId').text(this.location);
// newAbout.find('#datesId').text(this.dates);
// newAbout.find('#positionId').text(this.position);
// newAbout.find('article-body').html(this.description);
};

resumeRawData.forEach(function(resumeObject){
  resumeArr.push(new Resume(resumeObject));
});

resumeArr.forEach(function(resume) {
  $('.data').append(resume.aboutMe());
});
