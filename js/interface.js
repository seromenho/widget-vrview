$('form').submit(function (event) {
  event.preventDefault();

  Fliplet.Widget.save({
    image: $('input').val()
  }).then(function () {
    Fliplet.Widget.complete();
  });
});
