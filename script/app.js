'use strict'
(function(module) {

  // $('.header').css('background-image', 'url(images/skyline-resize.jpg)');
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

  Resume.prototype.aboutMe () => {
    let aboutSource = $('#template-resume').html();
    let aboutTemplate = Handlebars.compile(aboutSource);
    return aboutTemplate('#template-resume');
  };

  School.prototype.aboutMe () => {
    let aboutSource = $('#template-school').html();
    let aboutTemplate = Handlebars.compile(aboutSource);
    return aboutTemplate('#template-school');
  };

  view.handleNav () => {
    $('.top-nav .tab').on('click', () => {
      $('.tab-content').hide();
      $('.tab-content[id="' + $('.top-nav .tab').attr('data-content') + '"]').fadeIn(1500);
    });
  };

  view.initIndexPage (rawDataObj) => {
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

    schoolArr.forEach( (school) => {
      if (school.category === 'school') {
        $('#schoolData').append(school.aboutMe());
      }
    });
  };

  $(document).ready( () => {
    view.handleNav();
    Resume.fetchAll();
    $('.top-nav .tab:first').click();
  });

  Resume.fetchAll () => {
    if (localStorage.rawDataObj) {
      view.initIndexPage(JSON.parse(localStorage.rawDataObj));
    } else {
      $.getJSON('data/objects.json').then(rawDataObj => {
        view.initIndexPage(rawDataObj);
        localStorage.setItem('rawDataObj', JSON.stringify(rawDataObj));
      });
    }
  };
}(window));
