const view = {};

view.handleNav = function () {
  $('.top-nav .tab').on('click', function () {
    $('.tab-content').hide();
    $('.tab-content[id="' + $(this).attr('data-content') + '"]').fadeIn(1500);
  });

  $('.top-nav .tab:first').click();
};

view.initIndexPage = function () {

    resumeRawData.forEach(function (resumeObject) {
      resumeArr.push(new Resume(resumeObject));
    });

    resumeArr.forEach(function (resume) {
      $('#aboutData').append(resume.aboutMe());
    });

    schoolRawData.forEach(function (schoolObject) {
      schoolArr.push(new School(schoolObject));
    });

    schoolArr.forEach(function (school) {
      $('#schoolData').append(school.aboutMe());
    });
  };

  $(document).ready(function () {
    view.handleNav();
  });
