/* Shared interactions for the SMIU Events Portal front-end demo. */
(() => {
  'use strict';

  // Keep the footer year current without changing page content manually.
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // These forms demonstrate browser validation and a front-end confirmation only.
  // No student information is sent to a server or stored.
  document.querySelectorAll('form[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Demo complete — your form passed browser validation. No data was sent or saved.';
        feedback.classList.add('alert', 'alert-success', 'py-2', 'px-3');
      }

      form.reset();
    });
  });

  // Allow the registration page to preselect a society interest from a Join button.
  const params = new URLSearchParams(window.location.search);
  const interest = params.get('interest');
  const message = document.querySelector('#studentMessage');
  if (interest && message && !message.value) {
    message.value = `I am interested in joining the ${interest.replaceAll('-', ' ')} society.`;
  }
})();
