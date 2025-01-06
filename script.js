(function() {
    var target = document.currentScript; 
    window.addEventListener('load', function() {
      calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0dzpn2O7_S9BcwW3oek945uyBiDZE4hNSyMvPOuWv5pE7oGeEXju6EolNdrSwDb7TaiHBaz9q?gv=true', 
        color: '#039BE5',
        label: 'Book a Meeting', 
        target,
      });
    });
  })();