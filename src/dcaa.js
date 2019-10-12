$(function () {
  $(document).click(function (event) {
    $('.dcaa-dropdown-menu').collapse('hide');
  });

  function goToInvalidForm(formName) {
    $('.nav-item a[href="#' + formName + '"]').tab('show');
  }
});

