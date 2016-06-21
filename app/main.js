(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.TopView);
  });
})(window.app || (window.app = {}));
