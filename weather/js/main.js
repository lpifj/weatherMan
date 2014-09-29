var Main = {
  init: function() {
    Main.setupNotification();
  },

  setupNotification: function() {
    var notification = navigator.mozNotification.createNotification("thanks", "thanks");
    notification.show();
  },
}

$(document).ready(function() {
  Main.init();
});