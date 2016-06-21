(function(app) {
  app.TopView = ng.core.Component({
    selector: 'top-view',
    template: '<h1>{{title}}</h1><h2>{{subtitle}}</h2>'
  })
  .Class({
    constructor: function() {
      this.title = 'H.R.2578 Senate Vote Results';
      this.subtitle = 'A bill making appropriations for the Departments of Commerce and Justice, Science, and Related Agencies for the fiscal year ending September 30, 2016, and for other purposes.';
    }
  });
})(window.app || (window.app = {}));
